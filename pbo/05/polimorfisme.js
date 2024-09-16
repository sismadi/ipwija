// Definisi kelas induk
class Orang {
    tampilkanPeran() {
        console.log("Peran: Orang biasa");
    }
}

// Definisi kelas turunan
class Mahasiswa extends Orang {
    tampilkanPeran() {
        console.log("Peran: Mahasiswa");
    }
}

class Dosen extends Orang {
    tampilkanPeran() {
        console.log("Peran: Dosen");
    }
}

// Menggunakan polimorfisme
const orang1 = new Orang();
const mahasiswa1 = new Mahasiswa();
const dosen1 = new Dosen();

orang1.tampilkanPeran();    // Output: Peran: Orang biasa
mahasiswa1.tampilkanPeran(); // Output: Peran: Mahasiswa
dosen1.tampilkanPeran();     // Output: Peran: Dosen
