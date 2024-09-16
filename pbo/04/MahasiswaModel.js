class Mahasiswa {
    constructor(nama, nim, nilai) {
        this.nama = nama;  // Atribut publik
        this.nim = nim;    // Atribut publik
        let _nilai = nilai; // Atribut private menggunakan closure

        // Getter untuk mengakses nilai
        this.getNilai = function() {
            return _nilai;
        };

        // Setter untuk mengubah nilai dengan validasi
        this.setNilai = function(nilaiBaru) {
            if (nilaiBaru >= 0 && nilaiBaru <= 100) {
                _nilai = nilaiBaru;
            } else {
                console.log("Nilai harus antara 0 dan 100");
            }
        };
    }
}
