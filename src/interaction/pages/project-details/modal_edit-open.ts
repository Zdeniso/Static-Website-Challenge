import { vEditProjectEditButton, vEditProjectDialog } from "../../assert-element.ts";

vEditProjectEditButton.addEventListener("click", () => {
    console.log("On remarque que le bouton est cliqué");
    vEditProjectDialog.showModal()

})