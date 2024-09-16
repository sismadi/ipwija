self.onmessage = function(e) {
    const data = e.data;
    const hasil = prosesDataGambar(data);
    self.postMessage(hasil);
}

function prosesDataGambar(data) {
    // Simulasi proses gambar yang memakan waktu
    return `Proses selesai untuk data: ${data}`;
}
