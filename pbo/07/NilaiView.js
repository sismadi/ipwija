class NilaiView {
    render(rataRata) {
        return `
            <div class="nilai-card">
                <p>Rata-rata nilai: ${rataRata}</p>
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
