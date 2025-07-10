import { User } from "../classes/user"

// Constante du document html
const ID_BUTTON: string = "add-user-button" ;
const ID_FORM: string = "new-user__form";
const ID_DIALOG: string = "new-user__dialog" ;

// OPEN NEW USER FORM
// ======================================================= 

// Récupérer le bouton "Add user"
const addUserButton = document.getElementById(ID_BUTTON) as HTMLButtonElement | null;

// Récupérer la boîte de dialogue (dialog)
const userDialog = document.getElementById(ID_DIALOG) as HTMLDialogElement | null;

// Attacher l'événement de clic
if (addUserButton && userDialog) {
  addUserButton.addEventListener("click", () => {
    userDialog.showModal();
  });
} else {
  console.warn("Bouton ou boîte de dialogue introuvable :", );
}


// GET INFORMATION FROM NEW USER FORM
// ======================================================= 

// Récupérer le formulaire (form)
const userForm = document.getElementById(ID_FORM) as HTMLFormElement | null;
if (userForm) {
  userForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(userForm)
    const userData = {
      name: formData.get("name"),
      company: formData.get("company"),
      role: formData.get("role"),
      email: formData.get("email")
    }
    const newUser = new User(userData)
    console.log(newUser)
  })
} else {
  console.warn("The user form was not found. Check the ID")
}
