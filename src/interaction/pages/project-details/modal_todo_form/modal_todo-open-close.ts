import { vAddTodoItemButton, vAddTodoItemCancelButton, vAddTodoItemDialog, vAddTodoItemForm } from "../../../assert-element";

vAddTodoItemButton.addEventListener("click", () => {
    vAddTodoItemDialog.showModal()
})

vAddTodoItemCancelButton.addEventListener("click", () => {
    vAddTodoItemForm.reset();
    vAddTodoItemDialog.close()
})