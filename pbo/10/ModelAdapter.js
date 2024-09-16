// Kelas model lama
class OldUserModel {
    getUser() {
        return "User dari sistem lama";
    }
}

// Adapter untuk menggunakan antarmuka baru
class UserModelAdapter {
    constructor(oldModel) {
        this.oldModel = oldModel;
    }

    fetchUser() {
        return this.oldModel.getUser();
    }
}

// Penggunaan
const oldModel = new OldUserModel();
const adaptedModel = new UserModelAdapter(oldModel);
console.log(adaptedModel.fetchUser()); // Output: User dari sistem lama
