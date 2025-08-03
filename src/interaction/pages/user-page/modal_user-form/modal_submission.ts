import { vAddUserDialog, vAddUserForm, vProjectDetailsPage, vUserListUI } from "../../../assert-element.ts";
import { Project } from "../../../classes/project.ts";
import { Company, Role } from "../../../classes/type.ts";
import { IUser } from "../../../classes/user.ts";
import { ProjectsManager } from "../../../classes/projectsmanager.ts";

vAddUserForm.addEventListener("submit", (e) => {
    e.preventDefault();                                         
    const userRawData = new FormData(vAddUserForm);             
    const userData: IUser = {                                   
        name: userRawData.get("name") as string,
        company: userRawData.get("company") as Company,
        role: userRawData.get("role") as Role,
        email: userRawData.get("email") as string
    };

    const projectID = sessionStorage.getItem("projectID")
    if (!projectID) {
        throw new Error("Cannot find the project ID in the session storage")
    } else {
        const project = ProjectsManager.getProject(projectID);
        if (!project) {
            console.warn("No project exists with this ID")
        } else { 
            project.addNewUser(userData) 
        }          
    };
    vAddUserForm.reset();                                       
    vAddUserDialog.close();                                    
})
