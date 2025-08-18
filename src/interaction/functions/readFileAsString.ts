export function readFileAsString(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const jsonString = reader.result as string;
            resolve(jsonString);
        };
        reader.onerror = () => {
            reject(new Error("Failed to read file"));
        };
        reader.readAsText(file);
    });
};