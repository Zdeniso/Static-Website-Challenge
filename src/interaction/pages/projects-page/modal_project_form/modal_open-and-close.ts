import { vNewProjectButton, vCancelNewProjectButton, vNewProjectDialog } from "../../../assert-element.ts";

vNewProjectButton.addEventListener("click", () => {
    vNewProjectDialog.showModal()
    console.log("Le formulaire s'est bien ouvert")
})

vCancelNewProjectButton.addEventListener("click", () => {
    vNewProjectDialog.close();
    console.log("Le formulaire a bien été fermé")
})