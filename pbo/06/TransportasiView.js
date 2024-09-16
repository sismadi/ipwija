class TransportasiView {
    render(transportasi) {
        return `
            <div class="transportasi-card">
                <p>${transportasi.bergerak()}</p>
            </div>
        `;
    }
}
