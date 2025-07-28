import { vProjectsNav, vUsersNav, vProjectsCardsPage, vUsersPage, vTodosArea } from "../assert-element.ts";
import { showPage } from "../functions/showPage";

// Project page by clicking Projects in Navigation area
vProjectsNav.addEventListener("click", () => {
    showPage(vProjectsCardsPage);

    // Efface l'élément html details page pour le reset. Cette page se repopulate ensuite si on clique sur un projet
    const todosItem = document.querySelectorAll(".todo-event");
    todosItem.forEach((element) => element.remove())
});

// User page by clicking Users in Navigation area
vUsersNav.addEventListener("click", () => {
    showPage(vUsersPage)
})