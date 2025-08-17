import { showCommonModal } from "./showCommonModal.ts";
import { Project } from "../classes/project.ts";
import { ProjectsManager } from "../classes/projectsmanager.ts";
import { UsersManager } from "../classes/usersmanager.ts";
import { addToDOM, removeFromDOM } from "./add-removeFromDOM.ts";
import { vAllUsersTable, vProjectsCardsTable } from "../assert-element.ts";
import { showAndGetAreYouSureToReplaceModal } from "../functions/showAndGetAreYouSureToReplaceModal.ts";
import { showAndGetDoYouWantToAddUserModal } from "../functions/showAndGetDoYouWantToAddUserModal.ts";

export function exportToJSON<T>(list: T[], fileName: string = "data"): void {
    // Vérifie si la liste à exporter est vide
    if (list.length === 0) {
        console.warn("No element to export."); // Log technique
        showCommonModal("Error", `There is no data to export`); // Feedback utilisateur
        return; // On arrête l'exécution si rien à exporter
    }

    try {
        // JSON.stringify avec un replacer pour ignorer les propriétés non sérialisables (ici 'ui')
        const json = JSON.stringify(
            list,
            (key, value) => {
                // Si la clé est 'ui', on retourne undefined pour l'exclure du JSON
                if (key === "ui") return undefined;
                return value; // sinon on conserve la valeur
            },
            2 // indentation de 2 espaces pour un JSON lisible
        );

        // Crée un Blob (fichier en mémoire) contenant le JSON
        const blob = new Blob([json], { type: "application/json" });

        // Génère une URL temporaire pointant vers ce Blob
        const url = URL.createObjectURL(blob);

        // Crée dynamiquement un élément <a> pour déclencher le téléchargement
        const a = document.createElement("a");
        a.href = url; // lien vers le Blob
        a.download = `${fileName}.json`; // nom du fichier proposé

        // Ajoute l'élément <a> au DOM (nécessaire pour certains navigateurs)
        document.body.appendChild(a);

        // Simule un clic sur le lien pour lancer le téléchargement
        a.click();

        // Retire l'élément <a> du DOM après usage pour le nettoyage
        document.body.removeChild(a);

        // Libère l'URL blob pour éviter les fuites mémoire
        URL.revokeObjectURL(url);

        // Message utilisateur : export réussi
        showCommonModal("Success", `${fileName} has been exported successfully in JSON file!`);
    } catch (error) {
        // En cas d'erreur (ex. objet circulaire non géré), on log et on informe l'utilisateur
        console.error("Export error:", error);
        showCommonModal("Error", "An error occurred: Export has not been done");
    }
}


export async function importProjectsFromJSONFile(): Promise<void> {
    try {
        // Étape 1 : L'utilisateur sélectionne un fichier
        const file = await triggerFileSelection();

        // Étape 2 : Lire le fichier en tant que chaîne JSON
        const jsonString = await readFileAsString(file);

        // Étape 3 : Parser la chaîne JSON en objet générique JavaScript (plain object)
        const parsedData = parseJSONString(jsonString);

        // Étape 4 : Gérer la transformation des données (par exemple : créer des instances Project / User / Todo..)
        createObjectsFromJson(parsedData); // Tu as mentionné cette fonction
    } catch (error) {
        console.error("Error importing projects:", error);
    }
};

function triggerFileSelection(): Promise<File> {
    return new Promise((resolve, reject) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";

        input.onchange = () => {
            const file = input.files?.[0];
            if (file) {
                resolve(file);
            } else {
                reject(new Error("No file selected"));
            }
        };

        input.click();
    });
};

function readFileAsString(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const jsonString = reader.result as string;
            resolve(jsonString);
        };
        reader.onerror = () => {
            reject(new Error("Failed to read file"));
        };
        reader.readAsText(file);
    });
};

function parseJSONString(jsonString: string): any {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        throw new Error("Invalid JSON format");
    }
};

function createObjectsFromJson(jsonParsedData: any): void {
    for (const rawProjects of jsonParsedData) {
        const project = Project.fromJSON(rawProjects);

        // VERIFIER SI LE PROJET N'EXISTE PAS DEJA
        const existingProject = ProjectsManager.projectsList.find(p => p.id === project.id);
        
        if (!existingProject) {
        // Si non, ajoute le projet à la liste + UI    
            ProjectsManager.projectsList.push(project);
            addToDOM(vProjectsCardsTable, project.ui.element);

        } else {
        // Si oui, demande si on écrase le projet existant avec le projet que l'on importe
            const modal = showAndGetAreYouSureToReplaceModal(existingProject.name);
            const yesButton = modal.querySelector("#yes-replace-project") as HTMLButtonElement;
            const cancelButton = modal.querySelector("#cancel-replace-project") as HTMLButtonElement;

            yesButton.addEventListener("click", () => {
                ProjectsManager.projectsList = ProjectsManager.projectsList.map(p => p.id === project.id ? project : p);
                removeFromDOM(existingProject.ui.element);
                addToDOM(vProjectsCardsTable, project.ui.element);
                
                modal.close();
                removeFromDOM(modal)
            });

            cancelButton.addEventListener("click", () => {
                modal.close();
                removeFromDOM(modal)
            })         
        };

        // Vérifier si tous les users des instances Project sont dans la liste globale
        (project.users || []).forEach(user => {
            const existingUser = UsersManager.usersList.find(u => u.email === user.email);
            if (!existingUser) {
                const modal = showAndGetDoYouWantToAddUserModal(user.name);
                const yesButton = modal.querySelector("#yes-add-user") as HTMLButtonElement;
                const cancelButton = modal.querySelector("#cancel-add-user") as HTMLButtonElement;

                yesButton.addEventListener("click", () => {
                    // Ajouter l'utilisateur globalement
                    UsersManager.usersList.push(user);
                    addToDOM(vAllUsersTable, user.ui.element);

                    // Mettre à jour project.users directement
                    const index = project.users.findIndex(u => u.email === user.email);
                    if (index !== -1) project.users[index] = user;

                    modal.close();
                    removeFromDOM(modal);
                });

                cancelButton.addEventListener("click", () => {
                    // Supprimer l'utilisateur du projet si refusé
                    project.users = project.users.filter(u => u.email !== user.email);

                    modal.close();
                    removeFromDOM(modal);
                });
            } else {
                // Réutiliser l'instance existante
                const index = project.users.findIndex(u => u.email === existingUser.email);
                if (index !== -1) project.users[index] = existingUser;
            }
        });
    }
};