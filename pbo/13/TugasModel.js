class TugasModel {
    constructor() {
        this.tugas = [];
    }

    tambahTugas(nama) {
        if (!nama) throw new Error('Nama tugas tidak boleh kosong');
        this.tugas.push(nama);
    }

    getTugas() {
        return this.tugas;
    }
}

module.exports = TugasModel;
