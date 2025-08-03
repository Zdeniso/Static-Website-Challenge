import { Project } from "../classes/project";
import { formattedDate } from "./formattedDate";
import { getEl } from "./helperQuerySelector";

export function populateProjectEditForm(project: Project) {
    (getEl("#project-name") as HTMLInputElement).value = project.name;
    (getEl("#project-description") as HTMLTextAreaElement).value = project.description;
    (getEl("#project-status") as HTMLSelectElement).value = project.status;
    (getEl("#project-client") as HTMLInputElement).value = project.client;
    (getEl("#project-cost") as HTMLInputElement).value = project.cost.toString();
    (getEl("#project-finish-date") as HTMLInputElement).value = formattedDate(project.finishDate);
}

