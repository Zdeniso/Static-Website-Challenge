import { vNewProjectButton, vCancelNewProjectButton, vNewProjectDialog } from "../../../assert-element.ts";

vNewProjectButton.addEventListener("click", () => {
    vNewProjectDialog.showModal()
})

vCancelNewProjectButton.addEventListener("click", (e) => {
    e.preventDefault();
    vNewProjectDialog.close();
})