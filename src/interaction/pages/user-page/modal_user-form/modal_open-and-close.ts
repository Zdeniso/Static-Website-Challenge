import { vAddUserButton, vCancelNewUserButton, vAddUserDialog } from "../../../assert-element.ts";

vAddUserButton.addEventListener("click", () => {
    vAddUserDialog.showModal()
})

vCancelNewUserButton.addEventListener("click", () => {
    vAddUserDialog.close();
});