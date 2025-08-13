import { assertContainerElement, assertFormElement, assertButtonElement, assertDialogElement } from "./functions/assertHTMLElement.ts"
import { addUserForm, addUserCancelButton, projectUsersAddButton, addUserDialog, projectUsersTable, projectUsersExportButton, 
    projectUsersImportButton, projectDetailsUsersButton, projectsNav, projectsCardsPage, projectDetailsPage, projectUsersPage, 
    projectsCardsNewProjectButton, newProjectDialog, newProjectForm, newProjectCancelButton, projectsCardsTable, projectsCardsExportButton, 
    projectsCardsImportButton, projectDetailsEditButton, editProjectDialog, editProjectForm, editProjectCancelButton, 
    projectDetailsTodoAddButton, addTodoForm, addTodoDialog, addTodoCancelButton, projectDetailsTodoTable, 
    allUsersPage, usersNav, allUsersNewUserButton, newUserDialog, newUserForm, allUsersTable, projectDetailsDeleteButton, 
    allUsersImportButton, allUsersExportButton, newUserCancelButton, editUserDialog, editUserForm, editUserCancelButton

} from "./getelement.ts"


// ==========================================================================================
// Navigation
// ==========================================================================================
export const vProjectsNav = assertContainerElement(projectsNav);
export const vUsersNav = assertContainerElement(usersNav)


// ==========================================================================================
// Projects' Cards Page
// ==========================================================================================
export const vProjectsCardsPage = assertContainerElement(projectsCardsPage);
export const vProjectsCardsTable = assertContainerElement(projectsCardsTable);
export const vProjectsCardsNewProjectButton = assertButtonElement(projectsCardsNewProjectButton);
export const vProjectsCardsImportButton = assertButtonElement(projectsCardsImportButton);
export const vProjectsCardsExportButton = assertButtonElement(projectsCardsExportButton);

// Modal - New Project
export const vNewProjectDialog = assertDialogElement(newProjectDialog);
export const vNewProjectForm = assertFormElement(newProjectForm);
export const vNewProjectCancelButton = assertButtonElement(newProjectCancelButton);


// ==========================================================================================
// Project's Details Page
// ==========================================================================================
export const vProjectDetailsPage = assertContainerElement(projectDetailsPage);
export const vProjectDetailsUsersButton = assertButtonElement(projectDetailsUsersButton);
export const vProjectDetailsEditButton = assertButtonElement(projectDetailsEditButton);
export const vProjectDetailsDeleteButton = assertContainerElement(projectDetailsDeleteButton);
export const vProjectDetailsTodoTable = assertContainerElement(projectDetailsTodoTable);
export const vProjectDetailsTodoAddButton = assertContainerElement(projectDetailsTodoAddButton);

// Modal - Edit Project
export const vEditProjectDialog = assertDialogElement(editProjectDialog);
export const vEditProjectForm = assertFormElement(editProjectForm);
export const vEditProjectCancelButton = assertButtonElement(editProjectCancelButton);

// Modal - Add Todo
export const vAddTodoDialog = assertDialogElement(addTodoDialog);
export const vAddTodoForm = assertFormElement(addTodoForm);
export const vAddTodoCancelButton = assertButtonElement(addTodoCancelButton);


// ==========================================================================================
// Project's Users Page
// ==========================================================================================
export const vProjectUsersPage = assertContainerElement(projectUsersPage);
export const vProjectUsersTable = assertContainerElement(projectUsersTable);
export const vProjectUsersAddButton = assertButtonElement(projectUsersAddButton);
export const vExportUsersListButton = assertButtonElement(projectUsersExportButton);
export const vImportUsersListButton = assertButtonElement(projectUsersImportButton);

// Modal - Add User
export const vAddUserDialog = assertDialogElement(addUserDialog);
export const vAddUserForm = assertFormElement(addUserForm);
export const vAddUserCancelButton = assertButtonElement(addUserCancelButton);

// Modal - Edit User
export const vEditUserDialog = assertDialogElement(editUserDialog);
export const vEditUserForm = assertFormElement(editUserForm);
export const vEditUserCancelButton = assertButtonElement(editUserCancelButton);


// ==========================================================================================
// All Users' Page
// ==========================================================================================
export const vAllUsersPage = assertContainerElement(allUsersPage);
export const vAllUsersTable = assertContainerElement(allUsersTable);
export const vAllUsersNewUserButton = assertButtonElement(allUsersNewUserButton);
export const vAllUsersImportButton = assertButtonElement(allUsersImportButton);
export const vAllUsersExportButton = assertButtonElement(allUsersExportButton);

// Modal - New User
export const vNewUserDialog = assertDialogElement(newUserDialog);
export const vNewUserForm = assertFormElement(newUserForm);
export const vNewUserCancelButton = assertButtonElement(newUserCancelButton);