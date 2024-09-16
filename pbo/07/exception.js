function bagi(a, b) {
    try {
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        return a / b;
    } catch (error) {
        console.error("Terjadi error:", error.message);
    } finally {
        console.log("Operasi pembagian selesai.");
    }
}

// Penggunaan fungsi bagi
console.log(bagi(10, 2)); // Output: 5
console.log(bagi(10, 0)); // Output: Terjadi error: Pembagian dengan nol tidak diperbolehkan.
                           //         Operasi pembagian selesai.
