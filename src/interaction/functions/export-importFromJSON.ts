import { showCommonModal } from "./showCommonModal";

export function exportToJSON<T>(list: T[], fileName: string = "data"): void {
    // Déclare et exporte une fonction générique.
    // <T> : la fonction accepte une liste d’éléments de n’importe quel type T.
    // list: T[] : le tableau d’objets à exporter.
    // fileName: string = "data" : nom de base du fichier (valeur par défaut "data").
    // : void signifie que la fonction ne retourne rien.

    if (list.length === 0) {
        // Si la liste est vide, on prévient l’utilisateur et on arrête ici.
        console.warn("No element to export.");
        showCommonModal("Error", `There is no data to export`);
        return; // On sort de la fonction pour ne pas continuer.
    }

    try {
        // Bloc protégé : si quelque chose échoue pendant la sérialisation ou la création du fichier,
        // on tombera dans le catch pour afficher un message d’erreur.

        const json = JSON.stringify(list, null, 2);
        // Transforme la liste en texte JSON.
        // 2 : indentation de 2 espaces pour rendre le fichier lisible.
        // (Attention : JSON.stringify échoue si objets circulaires, et ne sérialise pas les méthodes.)

        const blob = new Blob([json], { type: "application/json" });
        // Crée un "Blob" (fichier binaire) contenant le texte JSON.
        // On précise le type MIME "application/json" pour que le navigateur/OS le reconnaisse.

        const url = URL.createObjectURL(blob);
        // Génère une URL temporaire (de type blob:) qui pointe vers ce Blob en mémoire.

        const a = document.createElement("a");
        // Crée dynamiquement un élément <a> (lien) pour déclencher un téléchargement.

        a.href = url;
        // Associe l’URL blob au lien.

        a.download = `${fileName}.json`;
        // Indique au navigateur le nom de fichier suggéré lors du téléchargement.

        document.body.appendChild(a);
        // Ajoute l’élément au DOM.
        // (Certains navigateurs requièrent que l’élément soit dans le document pour le cliquer.)

        a.click();
        // Simule un clic sur le lien pour lancer immédiatement le téléchargement.

        document.body.removeChild(a);
        // Nettoyage : on retire l’élément <a> du DOM après usage.

        URL.revokeObjectURL(url);
        // Libère l’URL blob pour éviter les fuites mémoire.
        // Après ceci, l’URL n’est plus valide.

        showCommonModal("Success", `${fileName} has been exported successfully in JSON file!`);
        // Feedback utilisateur : succès de l’export.
    } catch (error) {
        // Si une erreur s’est produite à un moment du try (ex. JSON.stringify),
        // on arrive ici.

        console.error("Export error:", error);
        // Log technique pour le développeur.

        showCommonModal("Error", "An error occurred: Export has not been done");
        // Feedback utilisateur : échec de l’export.
    }
}


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