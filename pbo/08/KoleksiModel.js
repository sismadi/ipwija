class KoleksiNilai {
    constructor() {
        this.nilai = new Map(); // Menggunakan Map sebagai koleksi
    }

    tambahNilai(nama, nilai) {
        if (!this.nilai.has(nama)) {
            this.nilai.set(nama, []);
        }
        this.nilai.get(nama).push(nilai);
    }

    getRataRata(nama) {
        const nilaiMahasiswa = this.nilai.get(nama);
        if (!nilaiMahasiswa || nilaiMahasiswa.length === 0) {
            throw new Error("Data nilai tidak ditemukan atau kosong.");
        }
        const total = nilaiMahasiswa.reduce((acc, curr) => acc + curr, 0);
        return total / nilaiMahasiswa.length;
    }
}
