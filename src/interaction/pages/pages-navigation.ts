import { vProjectsNav, vUsersNav, vProjectsCardsPage, vUsersPage } from "../assert-element.ts";
import { showPage } from "../functions/showPage";

// Project page by clicking Users in Navigation area
vProjectsNav.addEventListener("click", () => {
    showPage(vProjectsCardsPage)
});

// User page by clicking Users in Navigation area
vUsersNav.addEventListener("click", () => {
    showPage(vUsersPage)
})