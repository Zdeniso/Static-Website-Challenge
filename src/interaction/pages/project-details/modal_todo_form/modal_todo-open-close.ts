import { vProjectDetailsTodoAddButton, vAddTodoCancelButton, vAddTodoDialog, vAddTodoForm } from "../../../assert-element";
import { ProjectsManager } from "../../../classes/projectsmanager";
import { populateHTMLSelectElementFromUsersList } from "../../../functions/populateSelectElementFromUsersList";
import { getEl } from "../../../functions/helperQuerySelector";

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
        populateHTMLSelectElementFromUsersList(project.users, openByContainer);
        populateHTMLSelectElementFromUsersList(project.users, intendedToContainer);
        vAddTodoDialog.showModal()
    } catch (error) {
        console.error("An error occured : ", error);
        throw new Error("An unexpected error occured while trying to populate Select Element with Users")
    }
});

vAddTodoCancelButton.addEventListener("click", () => {
    vAddTodoForm.reset();
    vAddTodoDialog.close()
})