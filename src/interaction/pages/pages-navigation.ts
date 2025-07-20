import { vProjectsNav, vUsersNav, vProjectsCardsPage, vUsersPage } from "../assert-element.ts";
import { showPage } from "../functions/showPage";

vProjectsNav.addEventListener("click", () => {
    showPage(vProjectsCardsPage)
});

// USERS BUTTON
vUsersNav.addEventListener("click", () => {
    showPage(vUsersPage)
})

