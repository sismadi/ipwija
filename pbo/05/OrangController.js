class OrangController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    tampilkanOrang() {
        const mahasiswa = new this.model.Mahasiswa("Budi", "Jl. Merdeka", "123456");
        const dosen = new this.model.Dosen("Pak Agus", "Jl. Mawar", "654321");

        document.getElementById("output").innerHTML = this.view.render(mahasiswa) + this.view.render(dosen);
    }
}

// Inisialisasi dan Penggunaan
const orangController = new OrangController({Mahasiswa, Dosen}, OrangView);
orangController.tampilkanOrang();
