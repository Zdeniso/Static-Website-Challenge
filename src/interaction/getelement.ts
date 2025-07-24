import { ID_FORM, ID_CANCEL_NEW_USER_BUTTON, ID_ADD_USER_BUTTON, ID_DIALOG, ID_USER_LIST, 
  ID_ERROR_USER_DIALOG, ID_ERROR_USER_GOTIT_BUTTON, ID_ERROR_PROJECT_DIALOG, ID_ERROR_PROJECT_GOTIT_BUTTON,
  ID_EXPORT_USERS_BUTTON, ID_IMPORT_USERS_BUTTON, ID_USERS_NAV, ID_PROJECTS_NAV, ID_PROJECTS_CARDS_PAGE, 
  ID_PROJECT_DETAILS_PAGE, ID_USERS_PAGE, ID_NEW_PROJECT_BUTTON, ID_NEW_PROJECT_DIALOG, ID_NEW_PROJECT_FORM, 
  ID_CANCEL_NEW_PROJECT_BUTTON, ID_PROJECTS_CARDS_AREA, ID_EXPORT_PROJECTS_BUTTON, ID_IMPORT_PROJECTS_BUTTON,
  ID_PROJECT_LIST, ID_ERROR_NO_USER_DIALOG, ID_ERROR_NO_USER_GOTIT_BUTTON, ID_ERROR_NO_PROJECT_DIALOG,
  ID_ERROR_NO_PROJECT_GOTIT_BUTTON, ID_PROJECT_EDIT_BUTTON, ID_EDIT_PROJECT_DIALOG, ID_EDIT_PROJECT_FORM, 
  ID_EDIT_PROJECT_EDIT_BUTTON
} from "./constants"

export const usersPage = document.getElementById(ID_USERS_PAGE) as HTMLElement | null;
export const addUserForm = document.getElementById(ID_FORM) as HTMLFormElement | null;
export const cancelNewUserButton = document.getElementById(ID_CANCEL_NEW_USER_BUTTON) as HTMLButtonElement | null;
export const addUserButton = document.getElementById(ID_ADD_USER_BUTTON) as HTMLButtonElement | null;
export const addUserDialog = document.getElementById(ID_DIALOG) as HTMLDialogElement | null;
export const userListUI = document.getElementById(ID_USER_LIST) as HTMLElement | null; // (C)

export const errorUserAlreadyExistDialog = document.getElementById(ID_ERROR_USER_DIALOG)as HTMLDialogElement | null;
export const errorUserExistGotitButton = document.getElementById(ID_ERROR_USER_GOTIT_BUTTON) as HTMLButtonElement | null;
export const errorNoUserToExportDialog = document.getElementById(ID_ERROR_NO_USER_DIALOG)as HTMLDialogElement | null;
export const errorNoUserToExportGotitButton = document.getElementById(ID_ERROR_NO_USER_GOTIT_BUTTON) as HTMLButtonElement | null;

export const exportUsersListButton = document.getElementById(ID_EXPORT_USERS_BUTTON) as HTMLButtonElement | null;
export const importUsersListButton = document.getElementById(ID_IMPORT_USERS_BUTTON) as HTMLButtonElement | null;

export const usersNav = document.getElementById(ID_USERS_NAV) as HTMLElement | null;
export const projectsNav = document.getElementById(ID_PROJECTS_NAV) as HTMLElement | null;

export const projectsCardsPage = document.getElementById(ID_PROJECTS_CARDS_PAGE) as HTMLElement | null;
export const projectsCardsArea = document.getElementById(ID_PROJECTS_CARDS_AREA) as HTMLElement | null;
export const projectDetailsPage = document.getElementById(ID_PROJECT_DETAILS_PAGE) as HTMLElement | null;
export const projectEditButton = document.getElementById(ID_PROJECT_EDIT_BUTTON) as HTMLButtonElement | null;
export const editProjectDialog = document.getElementById(ID_EDIT_PROJECT_DIALOG) as HTMLDialogElement | null;
export const editProjectForm = document.getElementById(ID_EDIT_PROJECT_FORM) as HTMLFormElement | null;
export const editProjectEditButton = document.getElementById(ID_EDIT_PROJECT_EDIT_BUTTON) as HTMLButtonElement | null;

export const newProjectButton = document.getElementById(ID_NEW_PROJECT_BUTTON) as HTMLButtonElement | null;
export const newProjectDialog = document.getElementById(ID_NEW_PROJECT_DIALOG) as HTMLDialogElement | null;
export const newProjectForm = document.getElementById(ID_NEW_PROJECT_FORM) as HTMLFormElement | null;
export const cancelNewProjectButton = document.getElementById(ID_CANCEL_NEW_PROJECT_BUTTON) as HTMLButtonElement | null;
export const exportProjectsListButton = document.getElementById(ID_EXPORT_PROJECTS_BUTTON) as HTMLButtonElement | null;
export const importProjectsListButton = document.getElementById(ID_IMPORT_PROJECTS_BUTTON) as HTMLButtonElement | null;
export const projectListUI = document.getElementById(ID_PROJECT_LIST) as HTMLElement | null; // (C)

export const errorProjectAlreadyExistDialog = document.getElementById(ID_ERROR_PROJECT_DIALOG)as HTMLDialogElement | null;
export const errorProjectExistGotitButton = document.getElementById(ID_ERROR_PROJECT_GOTIT_BUTTON) as HTMLButtonElement | null;
export const errorNoProjectToExportDialog = document.getElementById(ID_ERROR_NO_PROJECT_DIALOG)as HTMLDialogElement | null;
export const errorNoProjectToExportGotitButton = document.getElementById(ID_ERROR_NO_PROJECT_GOTIT_BUTTON) as HTMLButtonElement | null;