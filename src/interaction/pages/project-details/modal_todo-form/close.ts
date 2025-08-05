import { vAddTodoCancelButton, vAddTodoDialog, vAddTodoForm } from "../../../assert-element";

vAddTodoCancelButton.addEventListener("click", () => {
    vAddTodoForm.reset();
    vAddTodoDialog.close()
})