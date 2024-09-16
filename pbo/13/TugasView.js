class TugasView {
    render(tugas) {
        console.log('Daftar Tugas:', tugas.join(', '));
    }

    renderError(error) {
        console.error('Error:', error);
    }
}

module.exports = TugasView;
