// Vérifie si un élément est bien un HTMLFormElement
export function assertFormElement(element: unknown): HTMLFormElement {
  if (!(element instanceof HTMLFormElement)) {
    console.warn("Le formulaire est introuvable ou incorrect.");
    throw new Error("Formulaire non valide.")
  }
  return element
};

// Vérifie si un élément est bien une boîte de dialogue
export function assertDialogElement(element: unknown): HTMLDialogElement {
  if (!(element instanceof HTMLDialogElement)) {
    console.warn("La boîte de dialogue est introuvable ou incorrecte.");
    throw new Error("Dialog non valide.")
  }
  return element
};

// Vérifie si un élément est un simple conteneur HTML (par exemple un <div>)
export function assertContainerElement(element: unknown): HTMLElement {
  if (!(element instanceof HTMLElement)) {
    console.warn("Le conteneur est introuvable ou incorrect.");
    throw new Error("Conteneur non valide.")
  }
  return element;
};

// Vérifie si un élément est bien un boutton
export function assertButtonElement(element: unknown): HTMLButtonElement {
  if (!(element instanceof HTMLButtonElement)) {
    console.warn("Le boutton est introuvable ou incorrect.");
    throw new Error("Boutton non valide.")
  }
  return element
};