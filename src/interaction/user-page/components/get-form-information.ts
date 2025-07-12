import { User, IUser, UserRole } from "../../classes/user"

const ID_FORM: string = "new-user__form";
const ID_TABLE: string = "main__table-area";

// GET INFORMATION FROM NEW USER FORM
// ======================================================= 

// 1) On pointe vers l'élément html <form>
const userForm = document.getElementById(ID_FORM)
// 2) S'il existe, on créé une instance de FormData avec ce <form>
if (userForm instanceof HTMLFormElement) {
  userForm.addEventListener("submit", (e) => {  
    e.preventDefault()
    console.log("On récupère le form brut : ", userForm)
    // 3) On transforme ce <form> en instance de FormData
    const formData = new FormData(userForm)
    console.log("On transforme le formulaire en objet FormData: ", formData)
    //4) On peux maintenant profiter de la méthode .get de FormData pour récupérer les infos 
    // des éléments html aux attributs "name=..."et les lier à des clefs, le tout dans un dictionnaire de paires {clef:value}
    const userData: IUser = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      role: formData.get("role") as UserRole,
      email: formData.get("email") as string
    }
    console.log("On récupère et lit chaque information à une clef: ", userData)
    // 5) On souhaite créé une instance d'une classe User comportant le template des informations que l'on souhaite
    // Soit les clefs d'un dictionnaire en attente d'information.
    // Le constructor nous permet de récupérer et lier les informations aux clefs similaires
    const newUser = new User(userData)
    console.log("On a maintenant un instance de User :", newUser)

    // 6) Création du nouveau bloc de code html pour la nouvelle ligne
    const userTable = document.getElementById(ID_TABLE)
    if (userTable instanceof HTMLDivElement) {
      userTable.appendChild(newUser.ui)
    } else {
      console.warn("Le conteneur `",ID_TABLE,"` est introuvable ou n'est pas un div.")
    }

  })
} else {
  console.warn("This is not a HTMLFormElement or the ID is wrong.")
}

  