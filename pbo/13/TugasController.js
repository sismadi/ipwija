class TugasController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    tambahTugas(nama) {
        try {
            this.model.tambahTugas(nama);
            this.view.render(this.model.getTugas());
        } catch (error) {
            this.view.renderError(error.message);
        }
    }
}

module.exports = TugasController;
