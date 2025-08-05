import { vProjectsCardsNewProjectButton, vNewProjectDialog } from "../../assert-element.ts"

vProjectsCardsNewProjectButton.addEventListener("click", () => {
    vNewProjectDialog.showModal()
})