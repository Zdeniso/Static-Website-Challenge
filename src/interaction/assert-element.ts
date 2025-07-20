import { assertContainerElement, assertFormElement, assertButtonElement, assertDialogElement } from "./functions/domChecks.ts"
import { addUserForm, cancelButton, addUserButton, addUserDialog, userListUI, errorUserDialog, 
    gotItButton, exportUsersListButton, importUsersListButton, usersNav, projectsNav, 
    projectsCardsPage, projectDetailsPage, usersPage, newProjectButton, newProjectDialog, 
    newProjectForm, cancelNewProjectButton } from "./getelement.ts"

// Navigation
export const vProjectsNav = assertContainerElement(projectsNav);
export const vUsersNav = assertContainerElement(usersNav);

// Projects' Cards Page
export const vProjectsCardsPage = assertContainerElement(projectsCardsPage);
export const vNewProjectButton = assertButtonElement(newProjectButton);
export const vNewProjectDialog = assertDialogElement(newProjectDialog);
export const vNewProjectForm = assertFormElement(newProjectForm);
export const vCancelNewProjectButton = assertButtonElement(cancelNewProjectButton);

// Project's Details Page
export const vProjectDetailsPage = assertContainerElement(projectDetailsPage);

// Users' Page
export const vUsersPage = assertContainerElement(usersPage);
export const vAddUserDialog = assertDialogElement(addUserDialog);
export const vAddUserForm = assertFormElement(addUserForm);
export const vAddUserButton = assertButtonElement(addUserButton);
export const vCancelButton = assertButtonElement(cancelButton);
export const vUserListUI = assertContainerElement(userListUI);
export const vExportUsersListButton = assertButtonElement(exportUsersListButton);
export const vImportUsersListButton = assertButtonElement(importUsersListButton);
// User's Page Error
export const vErrorUserDialog = assertDialogElement(errorUserDialog);
export const vGotItButton = assertButtonElement(gotItButton);



