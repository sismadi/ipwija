class TugasController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Bind actions
        this.view.bindHapusTugas(this.hapusTugas.bind(this));

        // Initial render
        this.updateView();
    }

    tambahTugas(tugas) {
        this.model.tambahTugas(tugas);
        this.updateView();
    }

    hapusTugas(index) {
        this.model.hapusTugas(index);
        this.updateView();
    }

    updateView() {
        this.view.render(this.model.getTugas());
    }
}

module.exports = TugasController;
