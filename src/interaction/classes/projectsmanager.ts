import { Project, IProject } from "./project.ts"

export class ProjectsManager {
    static list: Project[] = [];

    private constructor() {};

    addProject(data: IProject) {
        const newProject = new Project(data)
        ProjectsManager.list.forEach((project) => {
            if (newProject.__equal__(newProject)) {
                console.warn("A project with this name already exist !");
                // =============================                
                // FAIRE APPARAITRE UNE FENÊTRE UI 
                // =============================
                return;
            ProjectsManager.list.push(newProject)
            }
        })
    };

    deleteProject() {};

    getProject() {};



    importFromJSON() {};

    exportToJSON() {};




}