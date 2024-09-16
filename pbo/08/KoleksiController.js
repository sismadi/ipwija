class KoleksiController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    tampilkanRataRata(nama, nilai) {
        try {
            this.model.tambahNilai(nama, nilai);
            const rataRata = this.model.getRataRata(nama);
            document.getElementById("output").innerHTML = this.view.render(nama, rataRata);
        } catch (error) {
            document.getElementById("output").innerHTML = this.view.renderError(error.message);
        }
    }
}

// Inisialisasi dan Penggunaan
const koleksiController = new KoleksiController(new KoleksiNilai(), KoleksiView);
koleksiController.tampilkanRataRata("Budi", [80, 90, 100]); // Menampilkan rata-rata
koleksiController.tampilkanRataRata("Siti", [75, 85, 95]);  // Menampilkan rata-rata
