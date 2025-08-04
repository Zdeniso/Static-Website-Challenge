/**
 * Function from ChatGPT WIP
 * @param targetList List in which we want to import our parsed element
 * @param targetClass Class in which we want our element to be parsed
 */
export function importAndConvertFromJSON<T>(
    targetList: T[],
    targetClass: new (...args: any[]) => T
    ): void {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";

    input.addEventListener("change", () => {
        const file = input.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
        const content = reader.result;
        if (!content) return;

        try {
            const parsed = JSON.parse(content as string);
            if (!Array.isArray(parsed)) {
            console.error("Le JSON importé n'est pas un tableau.");
            return;
            }

            const converted = parseJSONElementsToClass(parsed, targetClass);
            targetList.push(...converted);
            console.log(`${converted.length} éléments importés dans ${targetClass.name}.`);

        } catch (error) {
            console.error("Erreur lors de l'import JSON :", error);
        }
        };

        reader.readAsText(file);
    });

    input.click();
}

// Transforme un tableau brut JSON en objets instanciés d'une classe donnée
export function parseJSONElementsToClass<T>(
    rawList: any[],
    targetClass: new (...args: any[]) => T
    ): T[] {
    const result: T[] = [];

    for (const item of rawList) {
        try {
        // On tente de créer une instance de la classe
        const instance = new targetClass(...Object.values(item));
        result.push(instance);
        } catch (error) {
        console.warn("Échec d’instanciation avec :", item, error);
        }
    }

    return result;
}