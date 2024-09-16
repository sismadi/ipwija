class TugasController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = e.target.querySelector('input');
            if (input.value) {
                this.model.tambahTugas(input.value);
                this.view.render(this.model.getTugas());
                input.value = '';
            }
        });
    }
}

// Inisialisasi dan Penggunaan
document.body.innerHTML = '<div id="app"></div>';
const model = new TugasModel();
const view = new TugasView();
const controller = new TugasController(model, view);
