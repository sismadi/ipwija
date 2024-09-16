class OrangView {
    render(orang) {
        return `
            <div class="orang-card">
                <p>${orang.tampilkanInformasi()}</p>
            </div>
        `;
    }
}
