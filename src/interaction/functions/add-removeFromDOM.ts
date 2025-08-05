export function addToDOM(container: HTMLElement, child: HTMLElement): void {
        container.appendChild(child);
    };

export function removeFromDOM(element: HTMLElement): void {
        element.remove()
    };