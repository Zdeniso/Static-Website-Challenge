import { vAddTodoDialog, vAddTodoForm } from "../../../assert-element.ts";
import { ProjectsManager } from "../../../classes/projectsmanager.ts";
import { ITodo, Todo } from "../../../classes/todo.ts";
import { Priority, TodoStatus, TodoType } from "../../../classes/type";
import { getProjectIDFromSessionStorage } from "../../../functions/getProjectIDFromSessionStorage.ts";

vAddTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const rawData = new FormData(vAddTodoForm);
    const data: ITodo = {
        name: rawData.get("todo-name") as string,
        description: rawData.get("todo-description") as string,
        status: rawData.get("todo-status") as TodoStatus,
        priority: rawData.get("todo-priority") as Priority,
        type: rawData.get("todo-type") as TodoType,
        creationDate: new Date(rawData.get("todo-creation-date") as string),
        openBy: rawData.get("todo-open-by") as string,
        intendedTo: rawData.get("todo-intended-to") as string,
    };

    const newTodo = new Todo(data);

    const projectID = getProjectIDFromSessionStorage();
    const project = ProjectsManager.getProject(projectID);
    if (!project) {
        throw new Error("Cannot get a project from projectsList with this ID")
    };

    project.addTodo(newTodo);
    vAddTodoForm.reset();
    vAddTodoDialog.close()    
})