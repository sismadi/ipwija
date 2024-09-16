class TugasModel {
    constructor() {
        this.tugas = [];
    }

    tambahTugas(nama) {
        this.tugas.push(nama);
    }

    getTugas() {
        return this.tugas;
    }
}
