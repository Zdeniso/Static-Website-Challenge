import { vNewProjectCancelButton, vNewProjectDialog } from "../../../assert-element.ts";

vNewProjectCancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    vNewProjectDialog.close();
})