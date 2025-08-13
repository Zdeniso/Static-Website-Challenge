import { vEditUserForm, vEditUserDialog } from "../../../assert-element.ts";
import { IUser } from "../../../classes/user.ts";
import { UsersManager } from "../../../classes/usersmanager.ts";
import { Company, Role } from "../../../classes/type.ts";

vEditUserForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userId = vEditUserForm.dataset.userId;
    if (!userId) {
        throw new Error("No user ID found for edit");
    };

    const userRawData = new FormData(vEditUserForm);
    const data: IUser = {
        name: userRawData.get("edit-user-name") as string,
        company: userRawData.get("edit-user-company") as Company,
        role: userRawData.get("edit-user-role") as Role,
        email: userRawData.get("edit-user-email") as string,
    };

    UsersManager.editUser(userId, data);
    vEditUserForm.reset();
    vEditUserDialog.close()
})
