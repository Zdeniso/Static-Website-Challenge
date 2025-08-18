import { vNewUserDialog, vNewUserForm } from "../../../assert-element.ts";
import { Company, Role } from "../../../classes/type.ts";
import { IUser } from "../../../classes/user.ts";
import { UsersManager } from "../../../classes/usersmanager.ts";


vNewUserForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const rawData = new FormData(vNewUserForm);
    const userData: IUser = {
        name: rawData.get("new-user-name") as string,
        company: rawData.get("new-user-company") as Company,
        role: rawData.get("new-user-role") as Role,
        email: rawData.get("new-user-email") as string
    };

    UsersManager.newUser(userData);
    vNewUserForm.reset();
    vNewUserDialog.close();
})