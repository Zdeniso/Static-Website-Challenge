import { vProjectDetailsPage, vProjectUsersBackToProjectDetailsButton } from "../../assert-element";
import { showPage } from "../../functions/showPage";

vProjectUsersBackToProjectDetailsButton.addEventListener("click", () => {
    showPage(vProjectDetailsPage)
})