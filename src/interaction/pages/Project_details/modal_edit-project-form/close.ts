import { vEditProjectCancelButton, vEditProjectDialog } from "../../../assert-element.ts"

vEditProjectCancelButton.addEventListener("click", () => {
    vEditProjectDialog.close()
})