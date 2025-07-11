import { User } from "../../classes/user"

const ID_FORM: string = "new-user__form";

// GET INFORMATION FROM NEW USER FORM
// ======================================================= 

// 1) On pointe vers l'élément html <form>
const userForm = document.getElementById(ID_FORM) as HTMLFormElement | null;
console.log("On récupère le form brut : ", userForm)
// 2) S'il existe, on créé une instance de FormData avec ce <form>
if (userForm) {
  userForm.addEventListener("submit", (e) => {  
    e.preventDefault()
    console.log("On récupère le form brut : ", userForm)
    // 3) On transforme ce <form> en instance de FormData
    const formData = new FormData(userForm)
    console.log("On transforme le formulaire en objet FormData: ", formData)
    //4) On peux maintenant profiter de la méthode .get de FormData pour récupérer les infos 
    // des éléments html aux attributs "name=..."et les lier à des clefs, le tout dans un dictionnaire de paires {clef:value}
    const userData = {
      name: formData.get("name"),
      company: formData.get("company"),
      role: formData.get("role"),
      email: formData.get("email")
    }
    console.log("On récupère et lit chaque information à une clef: ", userData)
    // 5) On souhaite créé une instance d'une classe User comportant le template des informations que l'on souhaite
    // Soit les clefs d'un dictionnaire en attente d'information.
    // Le constructor nous permet de récupérer et lier les informations aux clefs similaires
    const newUser = new User(userData)
    console.log(newUser)

  })
} else {
  console.warn("The user form was not found. Check the ID")
}

  