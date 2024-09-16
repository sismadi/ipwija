class MahasiswaView {
    render(mahasiswa) {
        return `
            <div class="mahasiswa-card">
                <h2>${mahasiswa.nama}</h2>
                <p>NIM: ${mahasiswa.nim}</p>
                <p>Nilai: ${mahasiswa.getNilai()}</p>
            </div>
        `;
    }
}
