import { ID_FORM, ID_CANCEL_NEW_USER_BUTTON, ID_ADD_USER_BUTTON, ID_DIALOG, ID_USER_LIST, 
  ID_ERROR_DIALOG, ID_GOTIT_BUTTON, ID_EXPORT_USERS_BUTTON, ID_IMPORT_USERS_BUTTON, 
  ID_USERS_NAV, ID_PROJECTS_NAV, ID_PROJECTS_CARDS_PAGE, ID_PROJECT_DETAILS_PAGE, 
  ID_USERS_PAGE, ID_NEW_PROJECT_BUTTON, ID_NEW_PROJECT_DIALOG, ID_NEW_PROJECT_FORM, 
  ID_CANCEL_NEW_PROJECT_BUTTON
} from "./constants"

export const addUserForm = document.getElementById(ID_FORM) as HTMLFormElement | null;
export const cancelNewUserButton = document.getElementById(ID_CANCEL_NEW_USER_BUTTON) as HTMLButtonElement | null;
export const addUserButton = document.getElementById(ID_ADD_USER_BUTTON) as HTMLButtonElement | null;
export const addUserDialog = document.getElementById(ID_DIALOG) as HTMLDialogElement | null;
export const userListUI = document.getElementById(ID_USER_LIST) as HTMLElement | null; // (C)

export const errorUserDialog = document.getElementById(ID_ERROR_DIALOG)as HTMLDialogElement | null;
export const gotItButton = document.getElementById(ID_GOTIT_BUTTON) as HTMLButtonElement | null;

export const exportUsersListButton = document.getElementById(ID_EXPORT_USERS_BUTTON) as HTMLButtonElement | null;
export const importUsersListButton = document.getElementById(ID_IMPORT_USERS_BUTTON) as HTMLButtonElement | null;

export const usersNav = document.getElementById(ID_USERS_NAV) as HTMLElement | null;
export const projectsNav = document.getElementById(ID_PROJECTS_NAV) as HTMLElement | null;

export const projectsCardsPage = document.getElementById(ID_PROJECTS_CARDS_PAGE) as HTMLElement | null;
export const projectDetailsPage = document.getElementById(ID_PROJECT_DETAILS_PAGE) as HTMLElement | null;
export const usersPage = document.getElementById(ID_USERS_PAGE) as HTMLElement | null;

export const newProjectButton = document.getElementById(ID_NEW_PROJECT_BUTTON) as HTMLButtonElement | null;
export const newProjectDialog = document.getElementById(ID_NEW_PROJECT_DIALOG) as HTMLDialogElement | null;
export const newProjectForm = document.getElementById(ID_NEW_PROJECT_FORM) as HTMLFormElement | null;
export const cancelNewProjectButton = document.getElementById(ID_CANCEL_NEW_PROJECT_BUTTON) as HTMLButtonElement | null;