import { vProjectDetailsTodoAddButton, vAddTodoDialog } from "../../assert-element.ts";
import { getEl } from "../../functions/helperQuerySelector.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { populateHTMLSelectElementWithUsersList } from "../../functions/populateHTMLSelectElementWithUsersList.ts";

vProjectDetailsTodoAddButton.addEventListener("click", () => {
    const openByContainer = getEl<HTMLSelectElement>("#todo-open-by");
    const intendedToContainer = getEl<HTMLSelectElement>("#todo-intended-to");

    const projectID = sessionStorage.getItem("projectID");
    if (!projectID) {
        throw new Error("Cannot reach item projectID in session storage")
    };

    const project = ProjectsManager.getProject(projectID);
    if (!project) {
        throw new Error("Cannot get project from projectsList with this ID")
    };

    try {
        populateHTMLSelectElementWithUsersList(project.users, openByContainer);
        populateHTMLSelectElementWithUsersList(project.users, intendedToContainer);
        vAddTodoDialog.showModal()
    } catch (error) {
        console.error("An error occured : ", error);
        throw new Error("An unexpected error occured while trying to populate Select Element with Users")
    }
});