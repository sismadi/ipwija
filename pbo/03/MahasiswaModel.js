class Mahasiswa {
    constructor(nama, nim, jurusan) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
    }

    belajar() {
        console.log(`${this.nama} sedang belajar.`);
    }
}
