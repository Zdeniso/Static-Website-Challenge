import { showCommonModal } from "./showCommonModal";

export function exportDataToJSONFile<T>(list: T[], fileName: string = "data"): void {
    // Vérifie si la liste à exporter est vide
    if (list.length === 0) {
        console.warn("No element to export."); // Log technique
        showCommonModal("Error", `There is no data to export`); // Feedback utilisateur
        return; // On arrête l'exécution si rien à exporter
    }

    try {
        // JSON.stringify avec un replacer pour ignorer les propriétés non sérialisables (ici 'ui')
        const json = JSON.stringify(
            list,
            (key, value) => {
                // Si la clé est 'ui' ou 'clones', on retourne undefined pour l'exclure du JSON
                if (key === "ui" || key === "clones") return undefined;
                return value; // sinon on conserve la valeur
            },
            2 // indentation de 2 espaces pour un JSON lisible
        );

        // Crée un Blob (fichier en mémoire) contenant le JSON
        const blob = new Blob([json], { type: "application/json" });

        // Génère une URL temporaire pointant vers ce Blob
        const url = URL.createObjectURL(blob);

        // Crée dynamiquement un élément <a> pour déclencher le téléchargement
        const a = document.createElement("a");
        a.href = url; // lien vers le Blob
        a.download = `${fileName}.json`; // nom du fichier proposé

        // Ajoute l'élément <a> au DOM (nécessaire pour certains navigateurs)
        document.body.appendChild(a);

        // Simule un clic sur le lien pour lancer le téléchargement
        a.click();

        // Retire l'élément <a> du DOM après usage pour le nettoyage
        document.body.removeChild(a);

        // Libère l'URL blob pour éviter les fuites mémoire
        URL.revokeObjectURL(url);

        // Message utilisateur : export réussi
        showCommonModal("Success", `${fileName} has been exported successfully in JSON file!`);
    } catch (error) {
        // En cas d'erreur (ex. objet circulaire non géré), on log et on informe l'utilisateur
        console.error("Export error:", error);
        showCommonModal("Error", "An error occurred: Export has not been done");
    }
}