import { User, IUser } from "./user.ts"
import { UUIDTypes } from 'uuid' ;
import { showUserError } from "../pages/user-page/modal_user-form/error_user-already-exist.ts";

export class UsersManager {
    // N'a pas vocation à être instancié (pas de constructeur). Sert à stocker les éléments Users 
    // et permettre des méthodes pour deleteUser, export import etc...

    // PROPERTIES
    static userList: User[] = [];

    // CONSTRUCTOR
    private constructor() {}    // Rend le constructeur privé ET vide. Empêche toute instanciation

    // METHODS
    static addUser (dataUser: IUser, container: HTMLElement): void {     
        const newUser = new User(dataUser);
        const alreadyExists = UsersManager.userList.some((user) => user.__equals__(newUser));                                           // Créé une instances de User avec toutes les propriétés (infos + ui + id)
        if (alreadyExists) {       // Vérifie que le User n'existe pas dans sa liste
            showUserError();
            console.warn("Attempted to add user that already exists:", newUser.email);                // Affiche une fenêtre d'erreur avec un message pour l'utilisateur
            return;
        } else {
            UsersManager.userList.push(newUser);                                    // Ajoute le User dans la liste (propriété "userList" de la classe UsersManager)                      
            container.appendChild(newUser.ui); 
        }
    }

    static getUser(id: UUIDTypes): User | null {
        const user = UsersManager.userList.find((element) => element.id === id);
        if (!user)  {
            console.warn("getUser: aucun utilisateur trouvé avec cet ID :", id);
            return null
        } else {
            return user
        }
    }

    static deleteUser(id: UUIDTypes): void {
        const user = UsersManager.userList.find((element) => element.id === id);
        if (!user)  {
            console.warn("deleteUser: aucun utilisateur trouvé avec l'ID :", id)
        } else {
            const newList = UsersManager.userList.filter((element) => element.id != id);
            UsersManager.userList = newList;
            user.ui.remove();
            console.log("L'utilisateur : ", user.name, " a été effacé avec succès !")
        }
    }

    static exportToJSON(fileName: string = "TOC_users-list"): void {        // More explication on CheatSheets Github
        if (UsersManager.userList.length === 0) {
            console.warn("Aucun utilisateur à exporter.");
            return
        } else {       
            const json = JSON.stringify(UsersManager.userList, null, 2); // Sérialise la liste des utilisateurs avec indentation
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
    }
    
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
                        UsersManager.addUser(user, container); // Tente de l’ajouter à la liste
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