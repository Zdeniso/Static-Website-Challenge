import { Project } from "../classes/project.ts";
import { ProjectsManager } from "../classes/projectsmanager.ts";
import { addToDOM, removeFromDOM } from "./add-removeFromDOM.ts";
import { vProjectsCardsTable } from "../assert-element.ts";
import { showAndGetAreYouSureToReplaceModal } from "./showAndGetAreYouSureToReplaceModal.ts";
import { checkUsers } from "./checkUsers.ts";
import { triggerFileSelection } from "./triggerFileSelection.ts";
import { readFileAsString } from "./readFileAsString.ts";
import { parseJSONString } from "./parseJSONString.ts";


export async function importProjectsFromJSONFile(): Promise<void> {
    try {
        // Étape 1 : L'utilisateur sélectionne un fichier
        const file = await triggerFileSelection();

        // Étape 2 : Lire le fichier en tant que chaîne JSON
        const jsonString = await readFileAsString(file);

        // Étape 3 : Parser la chaîne JSON en objet générique JavaScript (plain object)
        const parsedData = parseJSONString(jsonString);

        // Étape 4 : Gérer la transformation des données (par exemple : créer des instances Project / User / Todo..)
        await createProjectsFromJson(parsedData); // Tu as mentionné cette fonction
    } catch (error) {
        console.error("Error importing projects:", error);
    }
};

async function createProjectsFromJson(jsonParsedData: any): Promise<void> {
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
            const yesButton = modal.querySelector("#yes-replace") as HTMLButtonElement;
            const cancelButton = modal.querySelector("#cancel-replace") as HTMLButtonElement;

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
        await checkUsers(project)
    }
};