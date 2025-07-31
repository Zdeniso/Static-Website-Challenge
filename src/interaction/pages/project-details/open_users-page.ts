import { vUsersPageButton, vUsersPage } from "../../assert-element.ts";
import { showPage } from "../../functions/showPage.ts";

vUsersPageButton.addEventListener("click", () => {
    showPage(vUsersPage)
})