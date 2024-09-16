// Kelas untuk merepresentasikan sebuah Tombol
class Tombol {
    constructor(label, aksi) {
        this.label = label;
        this.aksi = aksi;
    }

    render() {
        // Membuat elemen tombol HTML
        const button = document.createElement('button');
        button.textContent = this.label;
        button.onclick = this.aksi;
        return button;
    }
}

// Kelas untuk merepresentasikan Jendela
class Jendela {
    constructor(judul) {
        this.judul = judul;
        this.elemen = document.createElement('div');
        this.elemen.className = 'jendela';
        this.elemen.innerHTML = `<h2>${this.judul}</h2>`;
    }

    tambahKomponen(komponen) {
        this.elemen.appendChild(komponen);
    }

    tampilkan() {
        document.body.appendChild(this.elemen);
    }
}

// Menggunakan kelas Jendela dan Tombol
const jendela = new Jendela('Contoh Jendela');
const tombol = new Tombol('Klik Saya', () => alert('Tombol diklik!'));
jendela.tambahKomponen(tombol.render());
jendela.tampilkan();
