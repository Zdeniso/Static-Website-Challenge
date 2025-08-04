import { vProjectDetailsTodoAddButton, vAddTodoCancelButton, vAddTodoDialog, vAddTodoForm } from "../../../assert-element";

vProjectDetailsTodoAddButton.addEventListener("click", () => {
    vAddTodoDialog.showModal()
})

vAddTodoCancelButton.addEventListener("click", () => {
    vAddTodoForm.reset();
    vAddTodoDialog.close()
})