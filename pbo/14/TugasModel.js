class TugasModel {
    constructor() {
        this.tugas = [];
    }

    tambahTugas(tugas) {
        if (!tugas) throw new Error('Tugas tidak boleh kosong');
        this.tugas.push(tugas);
    }

    hapusTugas(index) {
        if (index < 0 || index >= this.tugas.length) throw new Error('Indeks tidak valid');
        this.tugas.splice(index, 1);
    }

    getTugas() {
        return this.tugas;
    }
}

module.exports = TugasModel;
