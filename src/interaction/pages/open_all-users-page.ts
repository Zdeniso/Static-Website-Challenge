import { vAllUsersPage, vUsersNav } from "../assert-element.ts";
import { showPage } from "../functions/showPage.ts";

vUsersNav.addEventListener("click", () => {
    showPage(vAllUsersPage)
})