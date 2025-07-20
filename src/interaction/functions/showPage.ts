export function showPage(verifiedElement: HTMLElement) : void {
    const pages = document.querySelectorAll('[type="page"]')

    pages.forEach((page) => {
        page.setAttribute("style", "display: none");
    });
    verifiedElement.setAttribute("style", "display=''");
}