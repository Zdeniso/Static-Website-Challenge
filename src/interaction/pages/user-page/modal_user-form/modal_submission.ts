import { vAddUserForm } from "../../../assert-element";
import { ProjectsManager } from "../../../classes/projectsmanager";

vAddUserForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const rawData = new FormData(vAddUserForm);
    const userData = rawData.get("existing-user")

    const projectID = sessionStorage.getItem("projectID");
    if (!projectID) { 
        throw new Error("Cannot find projectID item in session Storage")
    } else {
       const project = ProjectsManager.getProject(projectID);
       
    }
    
})