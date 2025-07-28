import { Project, IProject } from "./project.ts";
import { showProjectError } from "../pages/projects-page/modal_project_form/error_project-already-exist.ts";
import { showNoProjectError } from "../pages/projects-page/error_no-project-to-export.ts";
import { vProjectsCardsPage, vProjectsCardsArea, vEditProjectDialog, vEditProjectForm, vProjectDetailsPage } from "../assert-element.ts";
import { getInitials, getRandomColor } from '../functions/setProjectInitials.ts';
import { showPage } from "../functions/showPage.ts";

export class ProjectsManager {
    static projectList: Project[] = [];

    private constructor() {};

    static addProject(data: IProject) : void {
        const newProject = new Project(data);

        const alreadExists = ProjectsManager.projectList.some((project) => project.__equal__(newProject))
        if (alreadExists) {
            showProjectError();
            console.warn("Attempted to add project that already exists:", newProject.name);
            return;
        } else {
            ProjectsManager.projectList.push(newProject);       // Storage : Add the new project to projectList
            vProjectsCardsArea.appendChild(newProject.ui);      // UI : Add the ui to the DOM   
        }
    }

    static getProject(id: string) : Project | null {
        const project = ProjectsManager.projectList.find((element) => element.id === id);
        if (!project) {
            console.warn("getProject: aucun projet trouvé avec cet ID :", id);
            return null
        } else {
            return project
        }
    };









    
    static editProject(data: IProject) : void {
        const dPageID = vProjectDetailsPage.getAttribute("data-id");        // On récupère l'id du projet stocké dans l'attribut data-id du bloc HTML Details Page
        const project = ProjectsManager.projectList.find((element) => element.id === dPageID) as Project;       // On pointe vers le projet de la liste projectList qui a cet ID

        if (!project) {
            console.warn("Projet non trouvé pour l'ID :", dPageID);
            return
        };

        const initials = getInitials(data.name);    // Si pas de changement de nom, on garde la couleur et les initiales plutôt que de tout refaire ? à revoir mais pas très important
        const color = getRandomColor();

        project.name = data.name;
        project.description = data.description;
        project.status = data.status;
        project.client = data.client;

        project.cost = data.cost;
        const formattedCost = new Intl.NumberFormat('fr-CH', { style: 'currency', currency: 'CHF' }).format(data.cost);  // Meilleur format
        project.finishDate = data.finishDate
        const formattedFinishDate = data.finishDate.toLocaleDateString('fr-CH'); // Meilleur format

        project.ui.innerHTML = 
            `
            <div class="project-card__header">
                <div class="project-card__acronym" style="background-color: ${color}">${initials}</div>
                <div class="project-card__title-and-description">
                    <h2>${project.name}</h2>
                    <p>${project.description}</p>                  
                </div>
            </div>
            <div class="card__content">
                <div class="project-card__values">
                        <p class="project-card__criteria">Status</p>
                        <p>${project.status}</p>
                </div>
                <div class="project-card__values">
                    <p class="project-card__criteria">Role</p>
                    <p>${project.client}</p>
                </div>
                <div class="project-card__values">
                    <p class="project-card__criteria">Cost</p>
                    <p>${formattedCost}</p>
                </div>     
                <div class="project-card__values">
                    <p class="project-card__criteria">Finish Date</p>
                    <p>${formattedFinishDate}</p>
                </div>                             
            </div>
            `;  

        // On efface l'ancien Project.ui pointé par data-id="" dans le DOM
        const oldCard = document.querySelector(`[data-id="${project.id}"]`) as HTMLElement;
        console.log("L'objet HTML a effacer est : ", oldCard);
        oldCard.remove();

        // On ajoute dans le DOM , et le conteneur UI mère,  le nouveau objet newProject.ui
        vProjectsCardsArea.appendChild(project.ui);
        console.log("L'élément mère ressemble doréanvant à cela :", vProjectsCardsArea)
        
        // (6) Ca nous quitte la page Details Project et nous ramène sur la page des projets. Important car le detail Page ne se populate qu'en cliquant sur la card
        showPage(vProjectsCardsPage)    
    };   



    deleteProject(id: string) : void {
        const project = ProjectsManager.projectList.find((element) => element.id === id);
        if (!project) {
            console.warn("getProject: aucun projet trouvé avec cet ID :", id);
        } else {
            const newProjectList = ProjectsManager.projectList.filter((element) =>
            element.id != id);
            ProjectsManager.projectList = newProjectList;
            project.ui.remove();
        }
    };

    static exportToJSON(fileName: string = "TOC_project-list"): void {        // More explication on CheatSheets Github
        if (ProjectsManager.projectList.length === 0) {
            console.warn("Aucun projet à exporter.");
            showNoProjectError();
            return
        } else {       
            const json = JSON.stringify(ProjectsManager.projectList, null, 2); // Sérialise la liste des utilisateurs avec indentation
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