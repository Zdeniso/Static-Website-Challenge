import { vEditTodoCancelButton, vEditTodoDialog } from "../../../assert-element.ts"

vEditTodoCancelButton.addEventListener("click", () => {
    vEditTodoDialog.close()
})