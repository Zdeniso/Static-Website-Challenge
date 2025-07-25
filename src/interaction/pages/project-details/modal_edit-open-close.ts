import { vEditProjectEditButton, vEditProjectDialog, vEditProjectCancelButton } from "../../assert-element.ts";

vEditProjectEditButton.addEventListener("click", () => {
    console.log("On remarque que le bouton est cliqué");
    vEditProjectDialog.showModal()

})

vEditProjectCancelButton.addEventListener("click", () => {
    console.log("L'édition a été annulé");
    vEditProjectDialog.close()
})