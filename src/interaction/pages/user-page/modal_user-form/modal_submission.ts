import { vAddUserDialog, vAddUserForm } from "../../../assert-element.ts";
import { ProjectsManager } from "../../../classes/projectsmanager.ts";
import { UsersManager } from "../../../classes/usersmanager.ts";
import { getEl } from "../../../functions/helperQuerySelector.ts";

vAddUserForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const selectEl = getEl<HTMLSelectElement>("select[name='existing-user']");

    if (!selectEl) {
        console.error("Select element not found in the form");
        return;
    };

    const selectedOption = selectEl.selectedOptions[0];
    if (!selectedOption) {
        console.error("No user selected");
        return;
    };

    const userId = selectedOption.dataset.id;
    if (!userId) {
        console.error("Selected option does not contain a data-id");
        return;
    };

    const projectID = sessionStorage.getItem("projectID");
    if (!projectID) {
        throw new Error("Cannot find projectID item in sessionStorage");
    };

    const project = ProjectsManager.getProject(projectID);
    if (!project) {
        throw new Error(`No project found with ID: ${projectID}`);
    };

    const user = UsersManager.getUser(userId);
    if (!user) {
        console.error(`No user found with ID: ${userId}`);
        return;
    };

    project.addUser(user);
    vAddUserForm.reset();
    vAddUserDialog.close();
});
