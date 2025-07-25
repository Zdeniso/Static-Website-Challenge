export function getInitials(element: string): string {
    const space = element.indexOf(" ");
    let rawInit = "";

    if (element.length === 1) {
        rawInit = element[0] ?? "";
    } else {
        if (space === -1) {
            rawInit = (element[0] ?? "") + (element[1] ?? "");
        } else {
            rawInit = (element[0] ?? "") + (element[space + 1] ?? "");
        }
    }

    return rawInit.toUpperCase()
}

export function getRandomColor(): string {
    const colors = ["#e74c1dff", "#ff0000ff", "#087e66ff", "#700f96ff", "#126196ff"];
    return colors[Math.floor(Math.random() * colors.length)];
}