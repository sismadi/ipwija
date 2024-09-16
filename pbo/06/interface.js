// Definisi antarmuka melalui pola objek
const KendaraanInterface = {
    bergerak: function() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
};

// Kelas yang mengimplementasikan antarmuka
class Pesawat {
    constructor() {
        Object.assign(this, KendaraanInterface); // Menerapkan antarmuka ke kelas
    }

    bergerak() {
        console.log("Pesawat terbang di udara.");
    }
}

// Kelas yang mengimplementasikan antarmuka
class Sepeda {
    constructor() {
        Object.assign(this, KendaraanInterface); // Menerapkan antarmuka ke kelas
    }

    bergerak() {
        console.log("Sepeda bergerak dengan pedal.");
    }
}

// Penggunaan
const pesawat = new Pesawat();
pesawat.bergerak(); // Output: Pesawat terbang di udara.

const sepeda = new Sepeda();
sepeda.bergerak(); // Output: Sepeda bergerak dengan pedal.
