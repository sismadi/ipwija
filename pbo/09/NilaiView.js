class NilaiView {
    render(nilai) {
        return `
            <div class="nilai-card">
                <p>Nama: ${nilai.nama}</p>
                <p>Nilai: ${nilai.nilai}</p>
            </div>
        `;
    }

    renderError(error) {
        return `
            <div class="nilai-card error">
                <p>Error: ${error}</p>
            </div>
        `;
    }
}
