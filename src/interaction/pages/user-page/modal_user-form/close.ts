import { vAddUserDialog, vAddUserCancelButton } from "../../../assert-element";

vAddUserCancelButton.addEventListener("click", () => {
    vAddUserDialog.close();
});