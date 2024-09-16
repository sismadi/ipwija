class TransportasiController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    tampilkanTransportasi() {
        const kereta = new this.model.Kereta();
        const pesawat = new this.model.Pesawat();

        document.getElementById("output").innerHTML = this.view.render(kereta) + this.view.render(pesawat);
    }
}

// Inisialisasi dan Penggunaan
const transportasiController = new TransportasiController({Kereta, Pesawat}, TransportasiView);
transportasiController.tampilkanTransportasi();
