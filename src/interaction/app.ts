// Common
import "./constants.ts";
import "./getelement.ts";
import "./assert-element.ts";

// =========================
// CLASSES
// =========================
import "./classes/project.ts";
import "./classes/projectcard.ts";
import "./classes/projectsmanager.ts";
import "./classes/todo.ts";
import "./classes/todocard.ts";
import "./classes/type.ts";
import "./classes/user.ts";
import "./classes/usercard.ts"
import "./classes/usersmanager.ts";

// =========================
// FUNCTIONS
// =========================
import "./functions/add-removeFromDOM.ts";
import "./functions/assertHTMLElement.ts";
import "./functions/formattingValues.ts";
import "./functions/helperQuerySelector.ts";
import "./functions/export-importFromJSON.ts"
import "./functions/populateHTMLSelectElementWithUsersList.ts";
import "./functions/populateProjectEditForm.ts";
import "./functions/populateSecondaryPage.ts";
import "./functions/storeDataToSessionStorage.ts";
import "./functions/getProjectIDFromSessionStorage.ts";
import "./functions/setProjectInitials.ts";
import "./functions/showPage.ts";

// =========================
// PAGES
// =========================
import "./pages/pages-navigation.ts";
import "./pages/open_all-users-page.ts";
//  Projects Page
// =========================
import "./pages/projects-page/export_projects-list.ts";
import "./pages/projects-page/import_projects-list.ts";
import "./pages/projects-page/card-interaction_open-project-details-page.ts";
import "./pages/projects-page/error_no-project-to-export.ts";
import "./pages/projects-page/open_new-project-form.ts";
// Modal_Project_Form
import "./pages/projects-page/modal_project_form/error_project-already-exist.ts";
import "./pages/projects-page/modal_project_form/close.ts";
import "./pages/projects-page/modal_project_form/submission.ts";


// Projects Detail Page
// =========================
import "./pages/project-details/open_project-users-page.ts"
import "./pages/project-details/open_project-edit-form.ts";
import "./pages/project-details/open_add-todo-form.ts"
import "./pages/project-details/delete_project.ts";
//  Modal Edit Form
import "./pages/project-details/modal_edit-form/close.ts";
import "./pages/project-details/modal_edit-form/submission.ts";
//  Modal Todo Form
import "./pages/project-details/modal_todo_form/close.ts";
import "./pages/project-details/modal_todo_form/submission.ts";


// Users Page
// =========================
import "./pages/user-page/export_users-list.ts";
import "./pages/user-page/import_users-list.ts";
import "./pages/user-page/error_no-user-to-export.ts";

//  Modal User Form
import "./pages/user-page/open_new-user-form.ts";
import "./pages/user-page/modal_user-form/modal_submission.ts";
import "./pages/user-page/modal_user-form/error_user-already-exist.ts";


// All Users Page
// =========================
import "./pages/all-users-page/open_new-user-form.ts";
//  Modal User Form
import "./pages/all-users-page/modal_new-user-form/close.ts";
import "./pages/all-users-page/modal_new-user-form/submit.ts"
