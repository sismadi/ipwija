class NilaiController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    tampilkanRataRata(nilai) {
        try {
            const modelNilai = new this.model(nilai);
            const rataRata = modelNilai.hitungRataRata();
            document.getElementById("output").innerHTML = this.view.render(rataRata);
        } catch (error) {
            document.getElementById("output").innerHTML = this.view.renderError(error.message);
        }
    }
}

// Inisialisasi dan Penggunaan
const nilaiController = new NilaiController(Nilai, NilaiView);
nilaiController.tampilkanRataRata([80, 90, 100]); // Menampilkan rata-rata
nilaiController.tampilkanRataRata([]);            // Menampilkan error: Data nilai tidak valid atau kosong.
