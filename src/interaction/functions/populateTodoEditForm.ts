import { Todo } from "../classes/todo.ts";
import { getEl } from "./helperQuerySelector.ts";
import { vEditTodoForm } from "../assert-element.ts";

export function populateTodoEditForm(todo: Todo) {
    vEditTodoForm.dataset.userId = todo.id; // on stocke l'ID dans le form
    getEl<HTMLInputElement>("#edit-todo-name").value = todo.name;
    getEl<HTMLTextAreaElement>("#edit-todo-description").value = todo.description;
    getEl<HTMLSelectElement>("#edit-todo-status").value = todo.status;
    getEl<HTMLSelectElement>("#edit-todo-priority").value = todo.priority;
    getEl<HTMLSelectElement>("#edit-todo-type").value = todo.type;
    getEl<HTMLSelectElement>("#edit-todo-open-by").value = todo.openBy;
    getEl<HTMLSelectElement>("#edit-todo-intended-to").value = todo.intendedTo;
}

