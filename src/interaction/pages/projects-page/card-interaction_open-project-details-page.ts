import { vProjectDetailsPage } from "../../assert-element";
import { showPage } from "../../functions/showPage";
import { populateSecondaryPage } from "../../functions/populateSecondaryPage.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { Project } from "../../classes/project.ts";
import { vProjectsCardsTable } from "../../assert-element";
import { storeDataToSessionStorage } from "../../functions/storeDataToSessionStorage.ts";

// Solution : Event Delegation
// Plutôt que d’attacher un click sur chaque élément, tu mets un seul click sur le parent commun, 
// et tu détectes l’élément réellement cliqué avec event.target.
  
vProjectsCardsTable.addEventListener('click', (event) => {
    // Target les premiers enfants du conteneur mère
    const targetedElement = event.target as HTMLElement;
    const elementSelected = targetedElement.closest(".project-card") as HTMLElement;
    const cardSelected = ProjectsManager.getUIByHTMLElement(elementSelected);
    
    if (!cardSelected) {
    } else {
        const project = ProjectsManager.getProjectByUI(cardSelected);
        if (!project) {
            throw new Error("Cannot get a project with this ProjectCard")
        };
        populateSecondaryPage(vProjectDetailsPage, project);
        storeDataToSessionStorage("projectID", project.id)  // Store the projectID for further action (populate detailPage, getUsers from this project etc..)
    };
    showPage(vProjectDetailsPage)
})