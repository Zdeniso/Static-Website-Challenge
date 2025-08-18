import { ID_ADD_USER_FORM, ID_ADD_USER_CANCEL_BUTTON, ID_PROJECT_USERS_ADD_BUTTON, ID_ADD_USER_DIALOG, ID_PROJECT_USERS_TABLE, 
  ID_PROJECT_USERS_EXPORT_BUTTON, ID_PROJECT_USERS_IMPORT_BUTTON, ID_PROJECTS_NAV, ID_PROJECTS_CARDS_PAGE, 
  ID_PROJECT_DETAILS_PAGE, ID_PROJECT_USERS_PAGE, ID_PROJECTS_CARDS_NEW_PROJECT_BUTTON, ID_NEW_PROJECT_DIALOG, ID_NEW_PROJECT_FORM, 
  ID_NEW_PROJECT_CANCEL_BUTTON, ID_PROJECTS_CARDS_TABLE, ID_PROJECTS_CARDS_EXPORT_BUTTON, ID_PROJECTS_CARDS_IMPORT_BUTTON,ID_EDIT_PROJECT_DIALOG, 
  ID_EDIT_PROJECT_FORM, ID_EDIT_PROJECT_CANCEL_BUTTON, ID_ADD_TODO_FORM, ID_ADD_TODO_DIALOG, ID_ADD_TODO_CANCEL_BUTTON, 
  ID_ALL_USERS_PAGE, ID_USERS_NAV, ID_ALL_USERS_NEW_USER_BUTTON, ID_NEW_USER_DIALOG, ID_NEW_USER_FORM, 
  ID_ALL_USERS_TABLE, ID_PROJECT_DETAILS_USERS_BUTTON, ID_PROJECT_DETAILS_EDIT_BUTTON, ID_PROJECT_DETAILS_DELETE_BUTTON, 
  ID_PROJECT_DETAILS_TODO_TABLE, ID_PROJECT_DETAILS_TODO_ADD_BUTTON, ID_ALL_USERS_IMPORT_BUTTON, ID_ALL_USERS_EXPORT_BUTTON,
  ID_NEW_USER_CANCEL_BUTTON, ID_EDIT_USER_DIALOG, ID_EDIT_USER_FORM, ID_EDIT_USER_CANCEL_BUTTON, ID_EDIT_TODO_DIALOG,
  ID_EDIT_TODO_FORM, ID_EDIT_TODO_CANCEL_BUTTON, ID_PROJECT_USERS_BACK_TO_PROJECT_DETAILS_BUTTON

} from "./constants"


// ==========================================================================================
// Navigation
// ==========================================================================================
export const projectsNav = document.getElementById(ID_PROJECTS_NAV) as HTMLElement | null;
export const usersNav = document.getElementById(ID_USERS_NAV) as HTMLElement | null;

// ==========================================================================================
// Projects' Cards Page
// ==========================================================================================
export const projectsCardsPage = document.getElementById(ID_PROJECTS_CARDS_PAGE) as HTMLElement | null;
export const projectsCardsTable = document.getElementById(ID_PROJECTS_CARDS_TABLE) as HTMLElement | null;
export const projectsCardsNewProjectButton = document.getElementById(ID_PROJECTS_CARDS_NEW_PROJECT_BUTTON) as HTMLButtonElement | null;
export const projectsCardsExportButton = document.getElementById(ID_PROJECTS_CARDS_EXPORT_BUTTON) as HTMLButtonElement | null;
export const projectsCardsImportButton = document.getElementById(ID_PROJECTS_CARDS_IMPORT_BUTTON) as HTMLButtonElement | null;

// Modal - New Project
export const newProjectDialog = document.getElementById(ID_NEW_PROJECT_DIALOG) as HTMLDialogElement | null;
export const newProjectForm = document.getElementById(ID_NEW_PROJECT_FORM) as HTMLFormElement | null;
export const newProjectCancelButton = document.getElementById(ID_NEW_PROJECT_CANCEL_BUTTON) as HTMLButtonElement | null;

/// ==========================================================================================
// Project's Details Page
// ==========================================================================================
export const projectDetailsPage = document.getElementById(ID_PROJECT_DETAILS_PAGE) as HTMLElement | null;
export const projectDetailsUsersButton = document.getElementById(ID_PROJECT_DETAILS_USERS_BUTTON) as HTMLButtonElement | null;
export const projectDetailsEditButton = document.getElementById(ID_PROJECT_DETAILS_EDIT_BUTTON) as HTMLButtonElement | null;
export const projectDetailsDeleteButton = document.getElementById(ID_PROJECT_DETAILS_DELETE_BUTTON) as HTMLButtonElement |null ;
export const projectDetailsTodoTable = document.getElementById(ID_PROJECT_DETAILS_TODO_TABLE) as HTMLElement | null;
export const projectDetailsTodoAddButton = document.getElementById(ID_PROJECT_DETAILS_TODO_ADD_BUTTON) as HTMLElement | null;

// Modal - Edit Project
export const editProjectDialog = document.getElementById(ID_EDIT_PROJECT_DIALOG) as HTMLDialogElement | null;
export const editProjectForm = document.getElementById(ID_EDIT_PROJECT_FORM) as HTMLFormElement | null;
export const editProjectCancelButton = document.getElementById(ID_EDIT_PROJECT_CANCEL_BUTTON) as HTMLButtonElement | null;

// Modal - Add Todo
export const addTodoDialog = document.getElementById(ID_ADD_TODO_DIALOG) as HTMLDialogElement | null ;
export const addTodoForm = document.getElementById(ID_ADD_TODO_FORM) as HTMLFormElement | null ;
export const addTodoCancelButton = document.getElementById(ID_ADD_TODO_CANCEL_BUTTON) as HTMLButtonElement | null;

// Modal - Edit Todo
export const editTodoDialog = document.getElementById(ID_EDIT_TODO_DIALOG) as HTMLDialogElement | null;
export const editTodoForm = document.getElementById(ID_EDIT_TODO_FORM) as HTMLFormElement | null;
export const editTodoCancelButton = document.getElementById(ID_EDIT_TODO_CANCEL_BUTTON) as HTMLButtonElement | null;

// ==========================================================================================
// Project's Users Page
// ==========================================================================================
export const projectUsersPage = document.getElementById(ID_PROJECT_USERS_PAGE) as HTMLElement | null;
export const projectUsersTable = document.getElementById(ID_PROJECT_USERS_TABLE) as HTMLElement | null;
export const projectUsersAddButton = document.getElementById(ID_PROJECT_USERS_ADD_BUTTON) as HTMLButtonElement | null;
export const projectUsersImportButton = document.getElementById(ID_PROJECT_USERS_IMPORT_BUTTON) as HTMLButtonElement | null;
export const projectUsersExportButton = document.getElementById(ID_PROJECT_USERS_EXPORT_BUTTON) as HTMLButtonElement | null;
export const projectUsersBackToProjectDetailsButton = document.getElementById(ID_PROJECT_USERS_BACK_TO_PROJECT_DETAILS_BUTTON) as HTMLButtonElement | null;

// Modal - Add User
export const addUserDialog = document.getElementById(ID_ADD_USER_DIALOG) as HTMLDialogElement | null;
export const addUserForm = document.getElementById(ID_ADD_USER_FORM) as HTMLFormElement | null;
export const addUserCancelButton = document.getElementById(ID_ADD_USER_CANCEL_BUTTON) as HTMLButtonElement | null;

// Modal - Edit User
export const editUserDialog = document.getElementById(ID_EDIT_USER_DIALOG) as HTMLDialogElement | null;
export const editUserForm = document.getElementById(ID_EDIT_USER_FORM) as HTMLFormElement | null;
export const editUserCancelButton = document.getElementById(ID_EDIT_USER_CANCEL_BUTTON) as HTMLButtonElement | null;

// ==========================================================================================
// All Users' Page
// ==========================================================================================
export const allUsersPage = document.getElementById(ID_ALL_USERS_PAGE) as HTMLElement | null;
export const allUsersTable = document.getElementById(ID_ALL_USERS_TABLE) as HTMLElement | null;
export const allUsersNewUserButton = document.getElementById(ID_ALL_USERS_NEW_USER_BUTTON) as HTMLButtonElement | null;
export const allUsersImportButton = document.getElementById(ID_ALL_USERS_IMPORT_BUTTON) as HTMLButtonElement | null;
export const allUsersExportButton = document.getElementById(ID_ALL_USERS_EXPORT_BUTTON) as HTMLButtonElement | null;


// Modal - New User
export const newUserDialog = document.getElementById(ID_NEW_USER_DIALOG) as HTMLDialogElement | null;
export const newUserForm = document.getElementById(ID_NEW_USER_FORM) as HTMLFormElement | null;
export const newUserCancelButton = document.getElementById(ID_NEW_USER_CANCEL_BUTTON) as HTMLButtonElement |null;