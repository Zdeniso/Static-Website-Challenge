import { vAddUserDialog, vAddUserForm } from "../../../assert-element.ts";
import { Company, Role } from "../../../classes/type.ts";
import { IUser } from "../../../classes/user.ts";
import { UsersManager } from "../../../classes/usersmanager.ts";

vAddUserForm.addEventListener("submit", (e) => {
    e.preventDefault();                                         
    const userRawData = new FormData(vAddUserForm);             
    const userData: IUser = {                                   
        name: userRawData.get("user-name") as string,
        company: userRawData.get("user-company") as Company,
        role: userRawData.get("user-role") as Role,
        email: userRawData.get("user-email") as string
    };

    UsersManager.addUser(userData)   
    vAddUserForm.reset();                                       
    vAddUserDialog.close();    
    console.log("La liste des utilisateurs est maintenant :", UsersManager.usersList )                                
})
