import { Project, IProject } from "./project.ts";
import { ProjectCard } from "./projectcard.ts";
import { showProjectError } from "../pages/projects-page/modal_project_form/error_project-already-exist.ts";
import { showNoProjectError } from "../pages/projects-page/error_no-project-to-export.ts";
import { removeFromDOM } from "../functions/removeElementFromDOM.ts"
import { addToDOM } from "../functions/addElementToDOM.ts";
import { vProjectsCardsArea } from "../assert-element.ts";

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
            addToDOM(vProjectsCardsArea, newProject.ui.element);
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

    /**
     * Method to export projectsList to a JSON file
     * @param fileName We can give a custom fileName if wanted
     * @returns Void
     */
    static exportToJSON(fileName: string = "TOC_project-list"): void {        // More explication on CheatSheets Github
        if (ProjectsManager.projectsList.length === 0) {
            console.warn("Aucun projet à exporter.");
            showNoProjectError();
            return
        } else {       
            const json = JSON.stringify(ProjectsManager.projectsList, null, 2); // Sérialise la liste des utilisateurs avec indentation
            const blob = new Blob([json], { type: "application/json" }); // Crée un blob JSON à partir du texte
            const url = URL.createObjectURL(blob); // Génère une URL temporaire pour le blob

            const a = document.createElement('a'); // Crée un élément <a> pour déclencher le téléchargement
            a.href = url; // Attribue l'URL blob au lien
            a.download = `${fileName}.json`;; // Définit le nom du fichier téléchargé

            document.body.appendChild(a); // nécessaire pour certains navigateurs
            a.click(); // Simule un clic pour lancer le téléchargement
            document.body.removeChild(a); // nettoyage

            URL.revokeObjectURL(url); // Libère l'URL blob pour éviter les fuites mémoire
        }
    };

    /**
     * Method to import a list of Project from a JSON file to projectsList of ProjectsManager
     * @param container We can give a custom fileName if wanted
     * @returns Void
     */
     
    static importFromJSON(container: HTMLElement): void {
        const input = document.createElement("input"); // Crée dynamiquement un élément <input type="file">
        input.type = "file"; // Définit le type comme fichier
        input.accept = "application/json"; // Accepte uniquement les fichiers JSON

        input.addEventListener("change", () => { // Déclenche l'import lorsque l'utilisateur sélectionne un fichier
            const filesList = input.files; // Récupère la liste des fichiers sélectionnés
            if (!filesList || filesList.length === 0) return; // Vérifie qu’un fichier a bien été sélectionné

            const reader = new FileReader(); // Crée un FileReader pour lire le contenu du fichier

            reader.addEventListener("load", () => { // Lorsque la lecture est terminée
                const json = reader.result; // Récupère le contenu du fichier
                if (!json) return; // Si vide, on annule

                try {
                    const projects: IProject[] = JSON.parse(json as string); // Parse le contenu JSON en tableau de IUser
                    for (const project of projects) { // Pour chaque utilisateur dans le fichier
                        ProjectsManager.addProject(project); // Tente de l’ajouter à la liste
                    }
                } catch (error) {
                    console.error("Erreur d'importation JSON :", error); // Gestion d’erreur si le JSON est invalide
                }
            });
            reader.readAsText(filesList[0]); // Lit le premier fichier comme du texte
        });
        input.click(); // Déclenche l’ouverture de la boîte de dialogue de sélection de fichier
    }   
}
(window as any).ProjectsManager = ProjectsManager;