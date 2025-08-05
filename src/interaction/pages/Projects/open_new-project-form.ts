import { vProjectsCardsNewProjectButton, vNewProjectDialog } from "../../assert-element"

vProjectsCardsNewProjectButton.addEventListener("click", () => {
    vNewProjectDialog.showModal()
})