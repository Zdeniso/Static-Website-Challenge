import { vEditProjectCancelButton, vEditProjectDialog } from "../../../assert-element"

vEditProjectCancelButton.addEventListener("click", () => {
    vEditProjectDialog.close()
})