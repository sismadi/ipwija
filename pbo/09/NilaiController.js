class NilaiController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    simpanNilai(nama, nilai) {
        try {
            const modelNilai = new this.model(nama, nilai);
            modelNilai.simpanKeFile();
            document.getElementById("output").innerHTML = this.view.render(modelNilai);
        } catch (error) {
            document.getElementById("output").innerHTML = this.view.renderError(error.message);
        }
    }

    bacaNilai(nama) {
        this.model.bacaDariFile(nama, (nilai) => {
            document.getElementById("output").innerHTML = this.view.render(nilai);
        });
    }
}

// Inisialisasi dan Penggunaan
const nilaiController = new NilaiController(Nilai, NilaiView);
nilaiController.simpanNilai("Budi", 90); // Menyimpan nilai dan menampilkannya
nilaiController.bacaNilai("Budi");      // Membaca nilai dari file dan menampilkannya
