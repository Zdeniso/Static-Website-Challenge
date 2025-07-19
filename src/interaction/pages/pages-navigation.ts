import { assertContainerElement } from "../functions/domChecks";
import { projectsNav, usersNav, projectsPage, usersPage } from "../uiElements/uiElements";
import { showPage } from "../functions/showPage";

// Vérification que les élements HTML "Nav", servant de boutton, existent
const projects = assertContainerElement(projectsNav);
const users = assertContainerElement(usersNav);

// Vérification que les pages existent
const vProjectsPage = assertContainerElement(projectsPage);
const vUsersPage = assertContainerElement(usersPage);

// Pour chaque "Nav" cliqué, fait apparaitre la page adéquat
projects.addEventListener("click", () => {
    showPage(vProjectsPage)
})

users.addEventListener("click", () => {
    showPage(vUsersPage)
})