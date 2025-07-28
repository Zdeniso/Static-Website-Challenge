import { Project } from "../classes/project";
import { vEditProjectForm } from "../assert-element";

export function populateProjectEditForm(project: Project) {
    (vEditProjectForm.querySelector("#project-name") as HTMLInputElement).value = project.name;
    (vEditProjectForm.querySelector("#project-description") as HTMLTextAreaElement).value = project.description;
    (vEditProjectForm.querySelector("#project-status") as HTMLSelectElement).value = project.status;
    (vEditProjectForm.querySelector("#project-client") as HTMLInputElement).value = project.client;
    (vEditProjectForm.querySelector("#project-cost") as HTMLInputElement).value = project.cost.toString();
}