import { IUser, UserRole } from "../classes/User"
import { UsersManager } from "../classes/UsersManager"

// Liste des ID's nécessaires
const ID_DIALOG: string = "new-user__dialog";
const ID_FORM: string = "new-user__form";
const ID_BUTTON: string = "add-user-button";
const ID_TABLE: string = "main__table-area";

// Ouvre le formulaire : .showModal
const addUserButton = document.getElementById(ID_BUTTON);
const addUserDialog = document.getElementById(ID_DIALOG);
if (addUserButton instanceof HTMLButtonElement && addUserDialog instanceof HTMLDialogElement) {
  addUserButton.addEventListener("click", () => {
    addUserDialog.showModal();
  });
} else {    // Gestion des erreurs
  if (!(addUserButton instanceof HTMLButtonElement)) {
    console.warn("This is not a HTMLButtonElement or the ID is wrong.");
  }
  if (!(addUserDialog instanceof HTMLDialogElement)) {
    console.warn("This is not a HTMLDialogElement or the ID is wrong.")
  }
}


// Récupère les informations du formulaire et créé une instance de la classe User sous le contrat IUser
const userForm = document.getElementById(ID_FORM)       // On pointe vers le formulaire <form>
if (userForm instanceof HTMLFormElement) {              // 2) S'il existe, on créé une instance de FormData de ce formulaire <form>
  userForm.addEventListener("submit", (e) => {  
    e.preventDefault()
    console.log("On récupère le form brut : ", userForm)

    const formData = new FormData(userForm)             // 3) On transforme ce <form> en instance de FormData
    console.log("On transforme le formulaire en objet FormData: ", formData)

    const userData: IUser = {                           //4) On peux maintenant profiter de la méthode .get de FormData pour récupérer les infos es éléments html aux attributs "name=..."et les lier à des clefs, le tout dans un dictionnaire de paires {clef:value}
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      role: formData.get("role") as UserRole,
      email: formData.get("email") as string
    }
    console.log("On récupère et lit chaque information à une clef: ", userData)

    // Création d'un nouveau "User" dans le tableau
    const usersListUI = document.getElementById(ID_TABLE) as HTMLElement
    const usersManager = new UsersManager(usersListUI)
    const newUser = usersManager.newUser(userData)
    console.log("On a maintenant un instance de User :", newUser)

    // Reset et Fermeture du modal
    if (addUserDialog instanceof HTMLDialogElement) {
      userForm.reset()
      addUserDialog.close()
    }
  })
} else {
  console.warn("This is not a HTMLFormElement or the ID is wrong.")
}

  