import { vProjectDetailsTodoTable, vEditTodoDialog } from "../../assert-element.ts";
import { getProjectIDFromSessionStorage } from "../../functions/getProjectIDFromSessionStorage.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { populateTodoEditForm } from "../../functions/populateTodoEditForm.ts";
import { getEl } from "../../functions/helperQuerySelector.ts";
import { populateHTMLSelectElementWithUsersList } from "../../functions/populateHTMLSelectElementWithUsersList.ts";

vProjectDetailsTodoTable.addEventListener('click', (event) => {
    const projectID = getProjectIDFromSessionStorage();
    const project = ProjectsManager.getProject(projectID);
    if (!project) {
        throw new Error("Cannot reach a project with ths ID given")
    };

    const target = event.target as HTMLElement;
    const editButton = target.closest(".actions button[title='Edit']") as HTMLButtonElement;
    if (!editButton) return;

    const elementSelected = editButton.closest(".todo-event") as HTMLElement;
    const cardSelected = project.getTodoUIByHTMLElement(elementSelected);    
    if (!cardSelected) return;
    
    const todo = project.getTodoByUI(cardSelected);
    if (!todo) {
        throw new Error("Cannot get an todo with this UserCard");
    };

    editButton.addEventListener("click", () => {
        try {
            const openByContainer = getEl<HTMLSelectElement>("#edit-todo-open-by");
            const intendedToContainer = getEl<HTMLSelectElement>("#edit-todo-intended-to");
            populateHTMLSelectElementWithUsersList(project.users, openByContainer);
            populateHTMLSelectElementWithUsersList(project.users, intendedToContainer);
            populateTodoEditForm(todo);
            vEditTodoDialog.showModal()
        } catch (error) {
            console.error("An error occured : ", error);
            throw new Error("An unexpected error occured while trying to populate Select Element with Users")
        }
    })
})