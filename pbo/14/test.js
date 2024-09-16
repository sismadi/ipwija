const TugasModel = require('./TugasModel');

test('menambah tugas baru', () => {
    const model = new TugasModel();
    model.tambahTugas('Belajar Refactoring');
    expect(model.getTugas()).toEqual(['Belajar Refactoring']);
});

test('menghapus tugas', () => {
    const model = new TugasModel();
    model.tambahTugas('Belajar Refactoring');
    model.hapusTugas(0);
    expect(model.getTugas()).toEqual([]);
});

test('menangani tugas kosong', () => {
    const model = new TugasModel();
    expect(() => model.tambahTugas('')).toThrow('Tugas tidak boleh kosong');
});
