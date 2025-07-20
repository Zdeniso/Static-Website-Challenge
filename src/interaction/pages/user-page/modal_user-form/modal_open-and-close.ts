import { vAddUserButton, vCancelButton, vAddUserDialog } from "../../../assert-element.ts";

vAddUserButton.addEventListener("click", () => {
    vAddUserDialog.showModal()
})

vCancelButton.addEventListener("click", () => {
    vAddUserDialog.close();
});