import { showCommonModal } from "./showCommonModal";

/**
 * Generic function to export an array of objects to a JSON file
 * @param list Array of objects to export
 * @param fileName Name of the output file (without extension)
 */
export function exportToJSON<T>(list: T[], fileName: string = "data"): void {
    if (list.length === 0) {
        console.warn("No element to export.");
        showCommonModal("Error", `There is no ${fileName} to export`);
        return;
    }

    try {
        const json = JSON.stringify(list, null, 2); // Indentation
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `${fileName}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        URL.revokeObjectURL(url);

        showCommonModal("Success", `${fileName} has been exported successfully in JSON file!`);
    } catch (error) {
        console.error("Export error:", error);
        showCommonModal("Error", "An error occurred: Export has not been done");
    }
}


/**
 * Generic function to import a JSON file and convert its content into instances of a given class
 * @param ClassType The class constructor to use for creating instances
 * @returns Promise that resolves to an array of class instances
 */
export function importFromJSON<T>( ClassType: { new (...args: any[]): T }): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "application/json";

        input.onchange = () => {
            const file = input.files?.[0];
            if (!file) return reject(new Error("No file selected"));

            const reader = new FileReader();
            reader.onload = () => {
                try {
                    const rawArray = JSON.parse(reader.result as string);

                    if (!Array.isArray(rawArray)) {
                        throw new Error("Invalid JSON: expected an array");
                    }

                    const items = rawArray.map(data => new ClassType(data));

                    showCommonModal("Success", `${ClassType.name} objects have been imported successfully!`);
                    resolve(items);
                } catch (error) {
                    console.error("Import error:", error);
                    showCommonModal("Error", "Import failed: invalid JSON or structure");
                    reject(error);
                }
            };

            reader.onerror = () => {
                console.error("File reading error:", reader.error);
                showCommonModal("Error", "Unable to read file");
                reject(reader.error);
            };
            reader.readAsText(file);
        };
        input.click();
    });
}