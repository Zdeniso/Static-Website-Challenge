import { ITodo } from "../../../classes/todo.ts";
import { ProjectsManager } from "../../../classes/projectsmanager";
import { Priority, TodoStatus, TodoType } from "../../../classes/type";
import { vEditTodoForm, vEditTodoDialog } from "../../../assert-element.ts";
import { getProjectIDFromSessionStorage } from "../../../functions/getProjectIDFromSessionStorage.ts";
import { showCommonModal } from "../../../functions/showCommonModal.ts";

vEditTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Récupération des informations
    const todoRawData = new FormData(vEditTodoForm);
    const data: ITodo = {
        name: todoRawData.get("edit-todo-name") as string,
        description: todoRawData.get("edit-todo-description") as string,
        status: todoRawData.get("edit-todo-status") as TodoStatus,
        priority: todoRawData.get("edit-todo-priority") as Priority,
        type: todoRawData.get("edit-todo-type") as TodoType,
        creationDate: new Date(todoRawData.get("edit-todo-creation-date") as string),
        openBy: todoRawData.get("edit-todo-open-by") as string,
        intendedTo: todoRawData.get("edit-todo-intended-to") as string,
    };

    const projectID = getProjectIDFromSessionStorage();
    const project = ProjectsManager.getProject(projectID);
    if (!project) {
        throw new Error("Cannot reach a project with ths ID given")
    };

    const todoId = vEditTodoForm.dataset.userId;
    if (!todoId) {
        throw new Error("Cannot reach todoID to edit todo item")
    };

    const todo = project.getTodo(todoId);
    if (!todo) {
        throw new Error("Cannot find todo in todoList with this ID")
    };

    try {
        todo.update(data);
        vEditTodoForm.reset();
        vEditTodoDialog.close();
        showCommonModal("Success", `Todo item ${todo.name} has been edited successfuly`)
    } catch (error) {
        showCommonModal("Error", `Something went wrong trying to edit ${todo.name}`);
        throw new Error(`Something went wrong trying to edit ${todo.name} : ${error}`)
    }
})