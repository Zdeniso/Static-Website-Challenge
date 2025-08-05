import { vAddTodoCancelButton, vAddTodoDialog, vAddTodoForm } from "../../../assert-element.ts";

vAddTodoCancelButton.addEventListener("click", () => {
    vAddTodoForm.reset();
    vAddTodoDialog.close()
})