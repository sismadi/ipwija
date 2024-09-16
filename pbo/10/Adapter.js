// Kelas lama dengan antarmuka lama
class OldSystem {
    specificRequest() {
        return "Data dari sistem lama";
    }
}

// Kelas baru dengan antarmuka yang berbeda
class NewSystem {
    request() {
        return "Data dari sistem baru";
    }
}

// Adapter untuk menggabungkan kedua sistem
class Adapter {
    constructor(oldSystem) {
        this.oldSystem = oldSystem;
    }

    request() {
        // Menyesuaikan antarmuka lama dengan yang baru
        return this.oldSystem.specificRequest();
    }
}

// Penggunaan
const oldSystem = new OldSystem();
const adapter = new Adapter(oldSystem);
console.log(adapter.request()); // Output: Data dari sistem lama

