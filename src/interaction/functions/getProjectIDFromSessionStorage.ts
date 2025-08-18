export function getProjectIDFromSessionStorage(): string {
    const projectID = sessionStorage.getItem("projectID");
    if (!projectID) {
        throw new Error("Cannot reach projectID item in sessionStorage")
    } else {
        return projectID
    };
};