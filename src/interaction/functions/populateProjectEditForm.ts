import { Project } from "../classes/project";
import { formatDateToAAAAMMDD } from "./formattingValues";
import { getEl } from "./helperQuerySelector";

export function populateProjectEditForm(project: Project) {
    getEl<HTMLInputElement>("#edit-project-name").value = project.name;
    getEl<HTMLTextAreaElement>("#edit-project-description").value = project.description;
    getEl<HTMLSelectElement>("#edit-project-status").value = project.status;
    getEl<HTMLInputElement>("#edit-project-client").value = project.client;
    getEl<HTMLInputElement>("#edit-project-cost").value = project.cost.toString();
    getEl<HTMLInputElement>("#edit-project-finish-date").value = formatDateToAAAAMMDD(project.finishDate);
}

