export class User {
    name
    company
    role
    email

    constructor(data) {
        this.name = data.name
        this.company = data.company
        this.role = data.role
        this.email = data.email
    }
}