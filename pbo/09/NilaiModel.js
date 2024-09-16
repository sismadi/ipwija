const fs = require('fs');

class Nilai {
    constructor(nama, nilai) {
        this.nama = nama;
        this.nilai = nilai;
    }

    simpanKeFile() {
        const data = JSON.stringify(this);
        fs.writeFile(`nilai_${this.nama}.json`, data, (err) => {
            if (err) throw err;
            console.log(`Data nilai ${this.nama} telah disimpan.`);
        });
    }

    static bacaDariFile(nama, callback) {
        fs.readFile(`nilai_${nama}.json`, 'utf8', (err, data) => {
            if (err) throw err;
            const nilai = JSON.parse(data);
            callback(nilai);
        });
    }
}
