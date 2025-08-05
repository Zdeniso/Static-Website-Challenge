import { vAddUserDialog, vAddUserCancelButton } from "../../../assert-element.ts";

vAddUserCancelButton.addEventListener("click", () => {
    vAddUserDialog.close();
});