import { ID_FORM, ID_CANCEL_BUTTON, ID_ADD_USER_BUTTON, ID_DIALOG, ID_USER_LIST, ID_ERROR_DIALOG,
    ID_GOTIT_BUTTON, ID_EXPORT_USERS_BUTTON, ID_IMPORT_USERS_BUTTON } from "../constants/constants"

export const addUserForm = document.getElementById(ID_FORM) as HTMLFormElement | null;
export const cancelButton = document.getElementById(ID_CANCEL_BUTTON) as HTMLButtonElement | null;
export const addUserButton = document.getElementById(ID_ADD_USER_BUTTON) as HTMLButtonElement | null;
export const addUserDialog = document.getElementById(ID_DIALOG) as HTMLDialogElement | null;
export const userListUI = document.getElementById(ID_USER_LIST) as HTMLElement | null; // (C)

export const errorUserDialog = document.getElementById(ID_ERROR_DIALOG)as HTMLDialogElement | null;
export const gotItButton = document.getElementById(ID_GOTIT_BUTTON) as HTMLButtonElement | null;

export const exportUsersListButton = document.getElementById(ID_EXPORT_USERS_BUTTON) as HTMLButtonElement | null;
export const importUsersListButton = document.getElementById(ID_IMPORT_USERS_BUTTON) as HTMLButtonElement | null;