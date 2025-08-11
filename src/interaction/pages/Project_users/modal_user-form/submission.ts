import { vAddUserDialog, vAddUserForm } from "../../../assert-element.ts";
import { ProjectsManager } from "../../../classes/projectsmanager.ts";
import { UsersManager } from "../../../classes/usersmanager.ts";
import { getProjectIDFromSessionStorage } from "../../../functions/getProjectIDFromSessionStorage.ts";
import { getEl } from "../../../functions/helperQuerySelector.ts";
import { showCommonModal } from "../../../functions/showCommonModal.ts";

vAddUserForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const selectEl = getEl<HTMLSelectElement>("select[name='existing-user']");

    if (!selectEl) {
        throw new Error("Select element not found in the form");
    };

    const selectedOption = selectEl.selectedOptions[0];
    if (!selectedOption) {
        throw new Error("No user selected");
    };

    const userId = selectedOption.dataset.id;
    if (!userId) {
        showCommonModal("Error", "Please select an existing user from the list")
        throw new Error("Selected option does not contain a data-id");
    };

    const projectID = getProjectIDFromSessionStorage()

    const project = ProjectsManager.getProject(projectID);
    if (!project) {
        throw new Error(`No project found with ID: ${projectID}`);
    };

    const user = UsersManager.getUser(userId);
    if (!user) {
        throw new Error(`No user found with ID: ${userId}`);
    };

    project.addUser(user);
    vAddUserForm.reset();
    vAddUserDialog.close();

});
