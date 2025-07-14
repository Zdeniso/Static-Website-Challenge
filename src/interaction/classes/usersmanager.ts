import { User, IUser } from "./User"

export class UsersManager {
    list: User[] = []

    newUser(data: IUser) {
        const user = new User(data)
        this.list.push(user)
        return user
    }
}