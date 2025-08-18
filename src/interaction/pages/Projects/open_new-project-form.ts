import { vProjectsCardsNewProjectButton, vNewProjectDialog } from "../../assert-element.ts"

vProjectsCardsNewProjectButton.addEventListener("click", () => {
    try {
        vNewProjectDialog.showModal()
    } catch (error){
        console.error("The new project form failed to open : ", error)
    }
})