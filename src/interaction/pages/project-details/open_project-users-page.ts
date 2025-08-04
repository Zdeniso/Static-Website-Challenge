import { vProjectDetailsUsersButton, vProjectUsersPage } from "../../assert-element.ts";
import { populateSecondaryPage } from "../../functions/populateSecondaryPage.ts";
import { showPage } from "../../functions/showPage.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";

vProjectDetailsUsersButton.addEventListener("click", () => {
    const id = sessionStorage.getItem("projectID");
    if (!id) {
        throw new Error("Cannot reach the ID value in session storage");
    };

    const project = ProjectsManager.getProject(id)
    if (!project) {
        throw new Error("No project was found with the ID given")
    };
    
    populateSecondaryPage(vProjectUsersPage, project)
    showPage(vProjectUsersPage)
})