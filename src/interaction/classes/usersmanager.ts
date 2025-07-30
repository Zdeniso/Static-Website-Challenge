import { User, IUser } from "./user.ts"
import { showNoUserError } from "../../interaction/pages/user-page/error_no-user-to-export.ts";
import { showProjectError } from "../pages/projects-page/modal_project_form/error_project-already-exist.ts";
import { UserCard } from "./usercard.ts";
import { vUserListUI } from "../assert-element.ts";

export class UsersManager {
    static usersList: User[] = [];

    private constructor() {}

   static addUser(data: IUser) : void {
        const alreadExists = this.usersList.some((user) => user.__equals__(data));     
        if (alreadExists) {
            showProjectError();
            console.warn("Attempted to add user that already exists:", data.name);
            return;
        } else {
            const newUser = new User(data);                      // User : Create User instance "newUser" with data
            newUser.ui = new UserCard(newUser);                  // UserCard : Create UserCard instance with "newUser" and fill User.ui property with it
            this.usersList.push(newUser);                        // Storage : Add the new user with all its properties to usersList

            // DOM 
            vUserListUI.appendChild(newUser.ui.htmlElement);     // Add UserCard.htmlElement to the DOM
            console.log("Projet ajouté avec succès :", newUser)
        }
    };

    static getUser(id: string): User | null {
        const user = this.usersList.find((element) => element.id === id);
        if (!user)  {
            console.warn("getUser: aucun utilisateur trouvé avec cet ID :", id);
            return null
        } else {
            return user
        }
    };

    static deleteUser(id: string): void {
        const user = this.usersList.find((element) => element.id === id);
        if (!user)  {
            console.warn("deleteUser: aucun utilisateur trouvé avec l'ID :", id)
        } else {
            const newList = this.usersList.filter((element) => element.id != id);
            this.usersList = newList;
            user.ui.htmlElement.remove();
            console.log("L'utilisateur : ", user.name, " a été effacé avec succès !")
        }
    };

    static exportToJSON(fileName: string = "TOC_users-list"): void {        // More explication on CheatSheets Github
        if (this.usersList.length === 0) {
            console.warn("Aucun utilisateur à exporter.");
            showNoUserError();
            return
        } else {       
            const json = JSON.stringify(this.usersList, null, 2); // Sérialise la liste des utilisateurs avec indentation
            const blob = new Blob([json], { type: "application/json" }); // Crée un blob JSON à partir du texte
            const url = URL.createObjectURL(blob); // Génère une URL temporaire pour le blob

            const a = document.createElement('a'); // Crée un élément <a> pour déclencher le téléchargement
            a.href = url; // Attribue l'URL blob au lien
            a.download = `${fileName}.json`;; // Définit le nom du fichier téléchargé

            document.body.appendChild(a); // nécessaire pour certains navigateurs
            a.click(); // Simule un clic pour lancer le téléchargement
            document.body.removeChild(a); // nettoyage

            URL.revokeObjectURL(url); // Libère l'URL blob pour éviter les fuites mémoire
        }
    };
    
    static importFromJSON(container: HTMLElement): void {
        const input = document.createElement("input"); // Crée dynamiquement un élément <input type="file">
        input.type = "file"; // Définit le type comme fichier
        input.accept = "application/json"; // Accepte uniquement les fichiers JSON

        input.addEventListener("change", () => { // Déclenche l'import lorsque l'utilisateur sélectionne un fichier
            const filesList = input.files; // Récupère la liste des fichiers sélectionnés
            if (!filesList || filesList.length === 0) return; // Vérifie qu’un fichier a bien été sélectionné

            const reader = new FileReader(); // Crée un FileReader pour lire le contenu du fichier

            reader.addEventListener("load", () => { // Lorsque la lecture est terminée
                const json = reader.result; // Récupère le contenu du fichier
                if (!json) return; // Si vide, on annule

                try {
                    const users: IUser[] = JSON.parse(json as string); // Parse le contenu JSON en tableau de IUser
                    for (const user of users) { // Pour chaque utilisateur dans le fichier
                        this.addUser(user); // Tente de l’ajouter à la liste
                    }
                } catch (error) {
                    console.error("Erreur d'importation JSON :", error); // Gestion d’erreur si le JSON est invalide
                }
            });

            reader.readAsText(filesList[0]); // Lit le premier fichier comme du texte
        });

        input.click(); // Déclenche l’ouverture de la boîte de dialogue de sélection de fichier
    }
}


(window as any).UsersManager = UsersManager;