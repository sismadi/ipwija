class Orang {
    constructor(nama, alamat) {
        this.nama = nama;
        this.alamat = alamat;
    }

    tampilkanInformasi() {
        console.log(`Nama: ${this.nama}, Alamat: ${this.alamat}`);
    }
}

// Definisi kelas turunan
class Mahasiswa extends Orang {
    constructor(nama, alamat, nim) {
        super(nama, alamat); // Memanggil konstruktor kelas induk
        this.nim = nim;
    }

    tampilkanInformasi() {
        super.tampilkanInformasi(); // Memanggil metode dari kelas induk
        console.log(`NIM: ${this.nim}`);
    }
}

// Penggunaan kelas turunan
const mahasiswa1 = new Mahasiswa("Budi", "Jl. Merdeka", "123456");
mahasiswa1.tampilkanInformasi();
