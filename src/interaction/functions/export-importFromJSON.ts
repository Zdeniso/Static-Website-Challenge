import { showCommonModal } from "./showCommonModal";

/**
 * Function to export an array of element to a JSON file
 * @param fileName We can give a custom fileName if wanted
 * @returns Void
 */
export function exportToJSON(list: Array<any>, fileName: string = "TOC_users-list"): void {        // More explication on CheatSheets Github
    if (list.length === 0) {
        console.warn("Aucun element à exporter.");
        showCommonModal("Error", "There is no Project to export")
        return
    } else { 
        try {      
            const json = JSON.stringify(list, null, 2); // Sérialise la liste des éléments avec indentation
            const blob = new Blob([json], { type: "application/json" }); // Crée un blob JSON à partir du texte
            const url = URL.createObjectURL(blob); // Génère une URL temporaire pour le blob

            const a = document.createElement('a'); // Crée un élément <a> pour déclencher le téléchargement
            a.href = url; // Attribue l'URL blob au lien
            a.download = `${fileName}.json`;; // Définit le nom du fichier téléchargé

            document.body.appendChild(a); // nécessaire pour certains navigateurs
            a.click(); // Simule un clic pour lancer le téléchargement
            document.body.removeChild(a); // nettoyage

            URL.revokeObjectURL(url); // Libère l'URL blob pour éviter les fuites mémoire

            showCommonModal("Success", "Projects has been exported successfully in JSON file !")
        
        } catch (error) {
            console.error("An error occured : ", error);
            showCommonModal("Error", "An error occured : Export has not been done")            
        }
    }
};


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