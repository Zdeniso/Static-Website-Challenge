import { vProjectsCardsNewProjectButton, vNewProjectCancelButton, vNewProjectDialog } from "../../../assert-element.ts";

vProjectsCardsNewProjectButton.addEventListener("click", () => {
    vNewProjectDialog.showModal()
})

vNewProjectCancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    vNewProjectDialog.close();
})