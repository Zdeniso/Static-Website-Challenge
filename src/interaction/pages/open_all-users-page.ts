import { vAllUsersPage, vUsersNav } from "../assert-element";
import { showPage } from "../functions/showPage";

vUsersNav.addEventListener("click", () => {
    showPage(vAllUsersPage)
})