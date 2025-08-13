import { User } from "../classes/user.ts";
import { getEl } from "./helperQuerySelector.ts";
import { vEditUserForm } from "../assert-element.ts";

export function populateUserEditForm(user: User) {
    vEditUserForm.dataset.userId = user.id; // on stocke l'ID dans le form
    getEl<HTMLInputElement>("#edit-user-name").value = user.name;
    getEl<HTMLSelectElement>("#edit-user-company").value = user.company;
    getEl<HTMLSelectElement>("#edit-user-role").value = user.role;
    getEl<HTMLInputElement>("#edit-user-email").value = user.email;
}

