export function triggerFileSelection(): Promise<File> {
    return new Promise((resolve, reject) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";

        input.onchange = () => {
            const file = input.files?.[0];
            if (file) {
                resolve(file);
            } else {
                reject(new Error("No file selected"));
            }
        };

        input.click();
    });
};