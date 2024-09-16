// Kelas abstrak menggunakan pola abstrak
class Transportasi {
    constructor(jenis) {
        if (this.constructor === Transportasi) {
            throw new Error("Kelas Transportasi adalah kelas abstrak dan tidak dapat diinstansiasi.");
        }
        this.jenis = jenis;
    }

    // Metode abstrak yang harus diimplementasikan
    bergerak() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
}

// Implementasi kelas turunan
class Kereta extends Transportasi {
    constructor() {
        super('Kereta');
    }

    bergerak() {
        return `${this.jenis} bergerak di rel.`;
    }
}

// Implementasi kelas turunan
class Pesawat extends Transportasi {
    constructor() {
        super('Pesawat');
    }

    bergerak() {
        return `${this.jenis} terbang di udara.`;
    }
}
