import { Project, IProject } from "./project.ts";
import { ProjectCard } from "./projectcard.ts";
import { showProjectError } from "../pages/projects-page/modal_project_form/error_project-already-exist.ts";
import { showNoProjectError } from "../pages/projects-page/error_no-project-to-export.ts";
import { removeFromDOM } from "../functions/removeElementFromDOM.ts"
import { addToDOM } from "../functions/addElementToDOM.ts";
import { vProjectsCardsTable } from "../assert-element.ts";

/**
 * Represent the container of all Project referenced in the application
 * Not instanciable
 */
export class ProjectsManager {
    static projectsList: Project[] = [];

    private constructor() {};

    /**
     * Method which try to point a project with its ID property
     * @param id ID of the wanted Project
     * @returns Return the Project if found, null if not
     */
    static getProject(id: string) : Project | null {
        return this.projectsList.find((e) => e.id === id) || null
    };

    /**
     * Method which try to point a project with its UI property
     * @param ui UI (ProjectCard) of the wanted Project
     * @returns Return the Project if found, null if not
     */
    static getProjectByUI(ui: ProjectCard ) : Project | null {
        return this.projectsList.find((e) => e.ui === ui) || null
    };

    /**
     * Method which try to point a ProjectCard with its UI.element property (HTMLElement)
     * @param element HTMLElement of the ProjectCard
     * @returns Return the ProjectCard if found, null if not
     */
    static getUIByHTMLElement(element: HTMLElement ) : ProjectCard | null {
        const project = this.projectsList.find((e) => e.ui.element === element)
        return project ? project.ui : null      // Ternary operator ( compact if-else statement)
    };   

    /**
     * Method for add a Project to the ProjectsManager projectsList
     * @param data Project data tested for potential instantiation as a Project
     * @returns No return.
     */
    static addProject(data: IProject) : void {
        const existingProject = this.projectsList.some((p) => p.hasSameName(data));     
        if (existingProject) {
            showProjectError();
            console.warn("Attempted to add project that already exists:", data.name);
            return;
        } else {
            const newProject = new Project(data);
            this.projectsList.push(newProject);
            addToDOM(vProjectsCardsTable, newProject.ui.element);
            console.log(`Project ${newProject.name} added successfuly`)
        }
    };

    /**
     * Method for edit or update an existing Project instance
     * @param id ID of the Project which will be update
     * @param data Data with which the project will be update
    */   
    static editProject(id: string, data: IProject) : void {
        const project = this.getProject(id);
        if (!project) {
            console.warn("getProject: aucun projet trouvé avec cet ID :", id); 
            return
        } else {
            project.update(data);
            console.log("Project has been update successfuly") 
        }
    };

    /**
     * Method which try to delete an existing Project
     * @param id ID of the wanted Project
     */
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