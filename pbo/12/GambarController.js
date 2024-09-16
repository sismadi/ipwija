class GambarController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    mulaiProses(data) {
        this.model.prosesGambar(data, (hasil) => {
            this.view.render(hasil);
        });
    }
}

// Inisialisasi dan Penggunaan
document.body.innerHTML = '<div id="output">Menunggu proses...</div>';
const model = new GambarModel();
const view = new GambarView();
const controller = new GambarController(model, view);
controller.mulaiProses('data gambar'); // Mulai memproses gambar di background
