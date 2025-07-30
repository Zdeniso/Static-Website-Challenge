import { vUsersPageButton, vUsersPage } from "../../assert-element.ts";
import { showPage } from "../../functions/showPage.ts";

// User page by clicking Users in Navigation area
vUsersPageButton.addEventListener("click", () => {
    showPage(vUsersPage)
})