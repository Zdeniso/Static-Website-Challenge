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
import "./classes/todomanager.ts";
import "./classes/type.ts";
import "./classes/user.ts";
import "./classes/usercard.ts"
import "./classes/usersmanager.ts";

// =========================
// FUNCTIONS
// =========================
import "./functions/addElementToDOM.ts";
import "./functions/assertElement.ts";
import "./functions/exportToJSON.ts";
import "./functions/formattedCost.ts";
import "./functions/formattedDate.ts";
import "./functions/helperQuerySelector.ts";
import "./functions/importFromJSON.ts"
import "./functions/populateAddUserForm.ts";
import "./functions/populateProjectEditForm.ts";
import "./functions/populateSecondaryPage.ts";
import "./functions/removeElementFromDOM.ts";
import "./functions/sessionStorage.ts";
import "./functions/setProjectInitials.ts";
import "./functions/showPage.ts";

// =========================
// PAGES
// =========================
import "./pages/pages-navigation.ts";
import "./pages/open_all-users-page.ts";
//  Projects Page
// =========================
import "./pages/projects-page/button_export-projects-list.ts";
import "./pages/projects-page/button_import-projects-list.ts";
import "./pages/projects-page/card-interaction_open-project-details-page.ts";
import "./pages/projects-page/error_no-project-to-export.ts";
// Modal_Project_Form
import "./pages/projects-page/modal_project_form/error_project-already-exist.ts";
import "./pages/projects-page/modal_project_form/modal_open-and-close.ts";
import "./pages/projects-page/modal_project_form/modal_submission.ts";
import "./pages/projects-page/modal_project_form/modal_edit.ts";


// Projects Detail Page
// =========================
import "./pages/project-details/open_project-users-page.ts"
//  Modal Edit Form
import "./pages/project-details/modal_edit_form/modal_edit-open-close.ts";
import "./pages/project-details/modal_edit_form/modal_edit-submission.ts";
//  Modal Todo Form
import "./pages/project-details/modal_todo_form/modal_todo-open-close.ts";
import "./pages/project-details/modal_todo_form/modal_todo-submission.ts";


// Users Page
// =========================
import "./pages/user-page/button_export-users-list.ts";
import "./pages/user-page/button_import-users-list.ts";
import "./pages/user-page/error_no-user-to-export.ts";
//  Modal User Form
import "./pages/user-page/modal_user-form/modal_open-and-close.ts";
import "./pages/user-page/modal_user-form/modal_submission.ts";
import "./pages/user-page/modal_user-form/error_user-already-exist.ts";


// All Users Page
// =========================
import "./pages/all-users-page/open_new-user-form.ts";
//  Modal User Form
import "./pages/all-users-page/modal_user-form/close_new-user-form.ts";
import "./pages/all-users-page/modal_user-form/modal_new-user-submission.ts"
