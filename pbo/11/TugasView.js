class TugasView {
    constructor() {
        this.app = document.getElementById('app');
        this.form = this.buatForm();
        this.daftarTugas = this.buatDaftarTugas();
    }

    buatForm() {
        const form = document.createElement('form');
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Tambahkan tugas...';
        const tombol = document.createElement('button');
        tombol.textContent = 'Tambah';
        form.appendChild(input);
        form.appendChild(tombol);
        this.app.appendChild(form);
        return form;
    }

    buatDaftarTugas() {
        const daftar = document.createElement('ul');
        this.app.appendChild(daftar);
        return daftar;
    }

    render(tugas) {
        this.daftarTugas.innerHTML = '';
        tugas.forEach(tugas => {
            const li = document.createElement('li');
            li.textContent = tugas;
            this.daftarTugas.appendChild(li);
        });
    }
}
