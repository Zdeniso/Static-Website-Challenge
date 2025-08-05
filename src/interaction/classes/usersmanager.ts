import { User, IUser } from "./user.ts"
import { showProjectError } from "../pages/projects-page/modal_project_form/error_project-already-exist.ts";
import { vAllUsersTable } from "../assert-element.ts";
import { addToDOM, removeFromDOM } from "../functions/add-removeFromDOM.ts";

/**
 * Represent the container of all User referenced in the application
 * Not instanciable
 */
export class UsersManager {
    static usersList: User[] = [];

    private constructor() {}
    /**
     * Method which try to point an User with its ID property
     * @param id ID of the wanted User
     * @returns Return the User if found, null if not
     */
    static getUser(id: string): User | null {
        return this.usersList.find((e) => e.id === id) || null
    };

    /**
     * Method for add an User to the UsersManager usersList
     * @param data User data tested for potential instantiation as an User
     * @returns No return.
     */
    static newUser(data: IUser) : void {
        const existingUser = this.usersList.some((u) => u.hasSameEmail(data));     
        if (existingUser) {
            showProjectError();
            console.warn("Attempted to add user that already exists:", data.name);
            return;
        } else {
            const newUser = new User(data);
            this.usersList.push(newUser);
            addToDOM(vAllUsersTable, newUser.ui.element);
        }
    };

    /**
     * Method for edit or update an existing User instance
     * @param id ID of the User which will be update
     * @param data Data with which the User will be update
    */   
    static editUser(id: string, data: IUser) : void {
        const user = this.getUser(id);
        if (!user) {
            console.warn("getUser: aucun user trouvé avec cet ID :", id); 
            return
        } else {
            user.update(data);
            console.log("User has been update successfuly") 
        }
    };    

    /**
     * Method which try to delete an existing User
     * @param id ID of the wanted User
     */
    static deleteUser(id: string) : void {
        const user = this.getUser(id);
        if (!user) {
            console.warn("getUser: aucun user trouvé avec cet ID :", id);
        } else {
            const newUsersList = this.usersList.filter((e) => e.id != id);
            this.usersList = newUsersList;
            removeFromDOM(user.ui.element);
            console.log("User has been removed successfuly")
        }
    };

    /*
     * ==========================================================================================================
     * METHOD TO FILTER ELEMENT AND GIVE BACK A NEW LIST
     * ==========================================================================================================
     */

/*
    /**
     * Method to export usersList to a JSON file
     * @param fileName We can give a custom fileName if wanted
     * @returns Void
     
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


    /**
     * Method to import a list of User from a JSON file to usersList of UsersManager
     * @param container We can give a custom fileName if wanted
     * @returns Void
     
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

*/
}
(window as any).UsersManager = UsersManager;