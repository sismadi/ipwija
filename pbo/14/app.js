const TugasModel = require('./TugasModel');
const TugasView = require('./TugasView');
const TugasController = require('./TugasController');

document.body.innerHTML = '<div id="app"></div>';

const model = new TugasModel();
const view = new TugasView();
const controller = new TugasController(model, view);

// Contoh menambahkan tugas baru
controller.tambahTugas('Belajar DonatJS');
controller.tambahTugas('Kerjakan proyek akhir');
