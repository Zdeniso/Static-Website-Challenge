import { vProjectDetailsPage } from "../../assert-element";
import { showPage } from "../../functions/showPage";
import { populateProjectDetailsPage } from "../../functions/populateProjectDetailsPage.ts";
import { ProjectsManager } from "../../classes/projectsmanager.ts";
import { Project } from "../../classes/project.ts";
import { vProjectsCardsArea } from "../../assert-element";

// Solution : Event Delegation
// Plutôt que d’attacher un click sur chaque élément, tu mets un seul click sur le parent commun, 
// et tu détectes l’élément réellement cliqué avec event.target.
  
vProjectsCardsArea.addEventListener('click', (event) => {
    // Target les premiers enfants du conteneur mère
    const targetedElement = event.target as HTMLElement;
    const cards = targetedElement.closest(".project-card") as HTMLElement;       

    const cardDataID = cards.getAttribute('data-id') as string;
    const projectSelected = ProjectsManager.getProject(cardDataID) as Project;
    const projectDetailsPageDataID = vProjectDetailsPage.getAttribute("data-id");

    if (projectSelected.id != projectDetailsPageDataID) {
        populateProjectDetailsPage(projectSelected)
    };
    showPage(vProjectDetailsPage)
})