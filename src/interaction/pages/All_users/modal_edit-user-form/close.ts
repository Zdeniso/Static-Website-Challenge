import { vEditUserForm, vEditUserDialog, vEditUserCancelButton } from "../../../assert-element.ts";

vEditUserCancelButton.addEventListener("click", () => {
    vEditUserForm.reset();
    vEditUserDialog.close()
})