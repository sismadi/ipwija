const TugasModel = require('./TugasModel');

test('menambah tugas ke dalam daftar', () => {
    const model = new TugasModel();
    model.tambahTugas('Belajar Refactoring');
    expect(model.getTugas()).toEqual(['Belajar Refactoring']);
});

test('tidak boleh menambah tugas dengan nama kosong', () => {
    const model = new TugasModel();
    expect(() => model.tambahTugas('')).toThrow('Nama tugas tidak boleh kosong');
});
