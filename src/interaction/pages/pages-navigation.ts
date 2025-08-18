import { vProjectsNav, vProjectsCardsPage, vUsersNav, vAllUsersPage } from "../assert-element.ts";
import { showPage } from "../functions/showPage.ts";

vProjectsNav.addEventListener("click", () => {
    try {
        showPage(vProjectsCardsPage);
    } catch (error) {
        console.error("Projects page failed to open : ", error)  
    }
});

vUsersNav.addEventListener("click", () => {
    try {
        showPage(vAllUsersPage)
    } catch (error){
        console.error("All users page failed to open : ", error)
    }
})
