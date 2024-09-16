class DatabaseConnection {
    constructor() {
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance;
        }
        this.connection = this.connect();
        DatabaseConnection.instance = this;
    }

    connect() {
        // Logika untuk menghubungkan ke database
        console.log('Membuat koneksi ke database.');
        return {};
    }
}

// Penggunaan
const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection();

console.log(db1 === db2); // Output: true (hanya ada satu instance)
