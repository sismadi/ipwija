// Membuat objek
let mahasiswa = {
    nama: "Budi",
    umur: 21,
    jurusan: "Informatika"
};

// Serialisasi objek ke JSON
let jsonMahasiswa = JSON.stringify(mahasiswa);
console.log(jsonMahasiswa); // Output: {"nama":"Budi","umur":21,"jurusan":"Informatika"}

// Menulis JSON ke file
fs.writeFile('mahasiswa.json', jsonMahasiswa, (err) => {
    if (err) throw err;
    console.log('Data mahasiswa telah disimpan.');
});

// Membaca JSON dari file dan deserialisasi
fs.readFile('mahasiswa.json', 'utf8', (err, data) => {
    if (err) throw err;
    let mahasiswaDeserialized = JSON.parse(data);
    console.log(mahasiswaDeserialized); // Output: { nama: 'Budi', umur: 21, jurusan: 'Informatika' }
});
