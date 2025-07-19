import { assertContainerElement } from "./domChecks"

export function showPage(verifiedElement: HTMLElement) : void {
    verifiedElement.setAttribute("style", "display=''");

    const hiddenPage = document.querySelectorAll('[type="page"]')
    hiddenPage.forEach((element) => {
        element.setAttribute("style", "display='none'");
    });
}