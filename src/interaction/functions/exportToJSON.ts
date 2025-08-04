/**
 * Function to export an array of element to a JSON file
 * @param fileName We can give a custom fileName if wanted
 * @returns Void
 */
export function exportToJSON(list: Array<any>, fileName: string = "TOC_users-list"): void {        // More explication on CheatSheets Github
    if (list.length === 0) {
        console.warn("Aucun element à exporter.");
        return
    } else {       
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
    }
};