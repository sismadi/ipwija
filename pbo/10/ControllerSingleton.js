class UserController {
    constructor() {
        if (UserController.instance) {
            return UserController.instance;
        }
        this.users = [];
        UserController.instance = this;
    }

    addUser(user) {
        this.users.push(user);
        console.log("User ditambahkan:", user);
    }
}

const userController1 = new UserController();
const userController2 = new UserController();

console.log(userController1 === userController2); // Output: true
