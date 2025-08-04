import { vAddTodoDialog, vAddTodoForm } from "../../../assert-element";
import { ITodo, Todo } from "../../../classes/todo.ts";
import { TodoManager } from "../../../classes/todomanager.ts";
import { Priority, TodoStatus, TodoType } from "../../../classes/type";
import { User, IUser } from "../../../classes/user.ts"

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

    TodoManager.addTodo(data);

    vAddTodoForm.reset();
    vAddTodoDialog.close()    
})