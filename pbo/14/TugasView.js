class TugasView {
    constructor() {
        this.app = document.getElementById('app');
        this.daftarTugas = document.createElement('ul');
        this.app.appendChild(this.daftarTugas);
    }

    render(tugas) {
        this.daftarTugas.innerHTML = '';
        tugas.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            const button = document.createElement('button');
            button.textContent = 'Hapus';
            button.onclick = () => this.onHapusTugas(index);
            li.appendChild(button);
            this.daftarTugas.appendChild(li);
        });
    }

    onHapusTugas(index) {
        if (this.hapusTugasHandler) this.hapusTugasHandler(index);
    }

    bindHapusTugas(handler) {
        this.hapusTugasHandler = handler;
    }
}

module.exports = TugasView;
