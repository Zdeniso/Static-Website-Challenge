import { vProjectsNav, vProjectsCardsPage, vUsersNav, vAllUsersPage } from "../assert-element.ts";
import { showPage } from "../functions/showPage.ts";

vProjectsNav.addEventListener("click", () => {
    showPage(vProjectsCardsPage);
});

vUsersNav.addEventListener("click", () => {
    showPage(vAllUsersPage);
})
