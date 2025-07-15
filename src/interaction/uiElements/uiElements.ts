import { ID_FORM, ID_CANCEL_BUTTON, ID_ADD_USER_BUTTON, ID_DIALOG, ID_USER_LIST  } from "../constants/constants"

export const addUserForm = document.getElementById(ID_FORM) as HTMLFormElement | null;
export const cancelButton = document.getElementById(ID_CANCEL_BUTTON) as HTMLButtonElement | null;
export const addUserButton = document.getElementById(ID_ADD_USER_BUTTON) as HTMLButtonElement | null;
export const addUserDialog = document.getElementById(ID_DIALOG) as HTMLDialogElement | null;
export const userListUI = document.getElementById(ID_USER_LIST) as HTMLElement | null; // (C)