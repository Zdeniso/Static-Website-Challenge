import { User } from "../classes/user.ts";
import { UsersManager } from "../classes/usersmanager.ts";
import { addToDOM, removeFromDOM } from "./add-removeFromDOM.ts";
import { vAllUsersTable } from "../assert-element.ts";
import { showAndGetAreYouSureToReplaceModal } from "./showAndGetAreYouSureToReplaceModal.ts";
import { triggerFileSelection } from "./triggerFileSelection.ts";
import { readFileAsString } from "./readFileAsString.ts";
import { parseJSONString } from "./parseJSONString.ts";


export async function importUsersToGlobalListFromJSONFile(): Promise<void> {
    try {
        // Étape 1 : L'utilisateur sélectionne un fichier
        const file = await triggerFileSelection();

        // Étape 2 : Lire le fichier en tant que chaîne JSON
        const jsonString = await readFileAsString(file);

        // Étape 3 : Parser la chaîne JSON en objet générique JavaScript (plain object)
        const parsedData = parseJSONString(jsonString);

        // Étape 4 : Gérer la transformation des données (par exemple : créer des instances Project / User / Todo..)
        createUsersFromJson(parsedData); // Tu as mentionné cette fonction
    } catch (error) {
        console.error("Error importing users:", error);
    }
};

function createUsersFromJson(jsonParsedData: any): void {
    for (const rawUsers of jsonParsedData) {
        const user = User.fromJSON(rawUsers);

        const existingUser = UsersManager.usersList.find(u => u.id === user.id);
        
        if (!existingUser) {
        // Si non, ajoute le user à la liste + UI    
            UsersManager.usersList.push(user);
            addToDOM(vAllUsersTable, user.ui.element);

        } else {
        // Si oui, demande si on écrase le user existant avec le user que l'on importe
            const modal = showAndGetAreYouSureToReplaceModal(existingUser.name);
            const yesButton = modal.querySelector("#yes-replace") as HTMLButtonElement;
            const cancelButton = modal.querySelector("#cancel-replace") as HTMLButtonElement;

            yesButton.addEventListener("click", () => {
                UsersManager.usersList = UsersManager.usersList.map(u => u.id === user.id ? user : u);
                removeFromDOM(existingUser.ui.element);
                addToDOM(vAllUsersTable, user.ui.element);
                
                modal.close();
                removeFromDOM(modal)
            });

            cancelButton.addEventListener("click", () => {
                modal.close();
                removeFromDOM(modal)
            })         
        };
    }
};