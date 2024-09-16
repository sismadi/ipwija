class Orang {
    constructor(nama, alamat) {
        this.nama = nama;
        this.alamat = alamat;
    }

    tampilkanInformasi() {
        return `Nama: ${this.nama}, Alamat: ${this.alamat}`;
    }
}

class Mahasiswa extends Orang {
    constructor(nama, alamat, nim) {
        super(nama, alamat);
        this.nim = nim;
    }

    tampilkanInformasi() {
        return `${super.tampilkanInformasi()}, NIM: ${this.nim}`;
    }
}

class Dosen extends Orang {
    constructor(nama, alamat, nidn) {
        super(nama, alamat);
        this.nidn = nidn;
    }

    tampilkanInformasi() {
        return `${super.tampilkanInformasi()}, NIDN: ${this.nidn}`;
    }
}
