import { vProjectDetailsPage, vProjectsCardsTable } from "../../assert-element.ts";
import { showPage } from "../../functions/showPage";
import { populateSecondaryPage } from "../../functions/populateSecondaryPage.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { storeDataToSessionStorage } from "../../functions/storeDataToSessionStorage.ts";
 
vProjectsCardsTable.addEventListener('click', (event) => {

    const targetedElement = event.target as HTMLElement;
    const elementSelected = targetedElement.closest(".project-card") as HTMLElement;
    const cardSelected = ProjectsManager.getUIByHTMLElement(elementSelected);
    
    if (!cardSelected) {
    } else {
        const project = ProjectsManager.getProjectByUI(cardSelected);
        if (!project) {
            throw new Error("Cannot get a project with this ProjectCard")
        } else {
            try {
                storeDataToSessionStorage("projectID", project.id) 
                populateSecondaryPage(vProjectDetailsPage, project);
                showPage(vProjectDetailsPage)
            } catch (error) {
                console.error("Something went wrong during storing in session storage, populate and show project details page : ", error)
            }
        }
    }; 
})

