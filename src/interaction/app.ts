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
import "./functions/populateUserEditForm.ts";
import "./functions/populateSecondaryPage.ts";
import "./functions/storeDataToSessionStorage.ts";
import "./functions/getProjectIDFromSessionStorage.ts";
import "./functions/setProjectInitials.ts";
import "./functions/showPage.ts";
import "./functions/showCommonModal.ts";
import "./functions/showAndGetAreYouSureToDeleteModal.ts";

// =========================
// PAGES
// =========================
import "./pages/pages-navigation.ts";
//  Projects Page
// =========================
import "./pages/Projects/export_projects-list.ts";
import "./pages/Projects/import_projects-list.ts";
import "./pages/Projects/open_project-details-page.ts";
import "./pages/Projects/open_new-project-form.ts";
// Modal_Project_Form
import "./pages/Projects/modal_project_form/close.ts";
import "./pages/Projects/modal_project_form/submission.ts";


// Projects Detail Page
// =========================
import "./pages/Project_details/open_project-users-page.ts"
import "./pages/Project_details/open_project-edit-form.ts";
import "./pages/Project_details/open_add-todo-form.ts"
import "./pages/Project_details/delete_project.ts";
//  Modal Edit Form
import "./pages/Project_details/modal_edit-form/close.ts";
import "./pages/Project_details/modal_edit-form/submission.ts";
//  Modal Todo Form
import "./pages/Project_details/modal_todo-form/close.ts";
import "./pages/Project_details/modal_todo-form/submission.ts";


// Project Users Page
// =========================
import "./pages/Project_users/export_users-list.ts";
import "./pages/Project_users/import_users-list.ts";
import "./pages/Project_users/open_new-user-form.ts";
import "./pages/Project_users/remove_user.ts";

//  Modal User Form
import "./pages/Project_users/modal_user-form/submission.ts";
import "./pages/Project_users/modal_user-form/close.ts";


// All Users Page
// =========================
import "./pages/All_users/open_new-user-form.ts";
import "./pages/All_users/delete_user.ts";
import "./pages/All_users/edit_user.ts";
//  Modal New User Form
import "./pages/All_users/modal_new-user-form/close.ts";
import "./pages/All_users/modal_new-user-form/submit.ts";
// Modal Edit User Form
import "./pages/All_users/modal_edit-user-form/close.ts";
import "./pages/All_users/modal_edit-user-form/submit.ts"


