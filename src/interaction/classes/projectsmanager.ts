import { Project, IProject } from "./project.ts";
import { showProjectError } from "../pages/projects-page/modal_project_form/error_project-already-exist.ts";
import { showNoProjectError } from "../pages/projects-page/error_no-project-to-export.ts";
import { vProjectsCardsArea } from "../assert-element.ts";
import { ProjectCard } from "./projectcard.ts";

export class ProjectsManager {
    static projectsList: Project[] = [];

    private constructor() {};

    static addProject(data: IProject) : void {
        const alreadExists = this.projectsList.some((project) => project.__equal__(data));     
        if (alreadExists) {
            showProjectError();
            console.warn("Attempted to add project that already exists:", data.name);
            return;
        } else {
            const newProject = new Project(data);                       // Project : Create Project instance "newProject" with data
            newProject.ui = new ProjectCard(newProject);                // ProjectCard : Create ProjectCard instance with "newProject" and fill Project.ui property with it
            this.projectsList.push(newProject);                         // Storage : Add the new project with all its properties to projectList

            // DOM 
            vProjectsCardsArea.appendChild(newProject.ui.htmlElement);  // Add ProjectCard.htmlElement to the DOM
            console.log("Projet ajouté avec succès :", newProject)
        }
    };

    static getProject(id: string) : Project | null {
        const project = this.projectsList.find((element) => element.id === id);
        if (!project) {
            console.warn("getProject: aucun projet trouvé avec cet ID :", id);
            return null
        } else {
            return project
        }
    };
   
    static editProject(project: Project, data: IProject) : void {
        // Properties
        project.name = data.name;
        project.description = data.description; 
        project.status = data.status;
        project.client = data.client;
        project.cost = data.cost;
        project.finishDate = data.finishDate;
        project.ui = project.ui.updateProjectCard(data)
        
        // DOM
        vProjectsCardsArea.appendChild(project.ui.htmlElement);
    };
 
    static deleteProject(id: string) : void {
        const project = this.projectsList.find((element) => element.id === id);
        if (!project) {
            console.warn("getProject: aucun projet trouvé avec cet ID :", id);
        } else {
            const newProjectList = this.projectsList.filter((element) =>
            element.id != id);
            this.projectsList = newProjectList;
            project.ui.htmlElement.remove();
        }
    };

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
    }
    
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
};