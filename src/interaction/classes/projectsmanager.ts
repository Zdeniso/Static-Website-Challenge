import { Project, IProject } from "./project.ts";
import { ProjectCard } from "./projectcard.ts";
import { addToDOM, removeFromDOM } from "../functions/add-removeFromDOM.ts";
import { vProjectsCardsTable } from "../assert-element.ts";
import { showCommonModal } from "../functions/showCommonModal.ts";

export class ProjectsManager {
    static projectsList: Project[] = [];

    private constructor() {};

    static getProject(id: string) : Project | null {
        return this.projectsList.find((e) => e.id === id) || null
    };

    static getProjectByUI(ui: ProjectCard ) : Project | null {
        return this.projectsList.find((e) => e.ui === ui) || null
    };

    static getUIByHTMLElement(element: HTMLElement ) : ProjectCard | null {
        const project = this.projectsList.find((e) => e.ui.element === element)
        return project ? project.ui : null      // Ternary operator ( compact if-else statement)
    };   

    static addProject(data: IProject) : void {
        const existingProject = this.projectsList.some((p) => p.hasSameName(data));     
        if (existingProject) {
            showCommonModal("Error", `Attempted to add project which already exists: ${data.name}`)
            throw new Error(`Attempted to add project which already exists: ${data.name}`);
        } else {
            try {
                const newProject = new Project(data);
                this.projectsList.push(newProject);
                addToDOM(vProjectsCardsTable, newProject.ui.element)
                showCommonModal("Success", `${newProject.name} has been added successfuly to the project list`)
            } catch (error) {
                showCommonModal("Error", "Something went wrong trying to add this project" )
                throw new Error(`Something went wrong trying to add this project : ${error}`)
            }
        }
    };

    static editProject(id: string, data: IProject) : void {
        const project = this.getProject(id);
        if (!project) {
            console.warn("getProject: aucun projet trouvé avec cet ID :", id); 
            return
        } else {
            try {
                project.update(data);
                showCommonModal("Success", "Project informations have been edited successfuly")
            } catch (error) {
                showCommonModal("Error", "Something went wrong trying to edit the project informations")
            }
        }
    };

    static deleteProject(id: string) : void {
        const project = this.getProject(id);
        if (!project) {
            console.warn("getProject: aucun projet trouvé avec cet ID :", id);
        } else {
            const newProjectList = this.projectsList.filter((element) => element.id != id);
            this.projectsList = newProjectList;
            removeFromDOM(project.ui.element);
            console.log("Project has been removed successfuly")
        }
    };

    /*
     * ==========================================================================================================
     * METHOD TO FILTER ELEMENT AND GIVE BACK A NEW LIST
     * ==========================================================================================================
     */
}
(window as any).ProjectsManager = ProjectsManager;