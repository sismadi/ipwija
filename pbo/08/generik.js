// Fungsi generik menggunakan pola
function getElementAtIndex(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    }
    throw new Error("Indeks di luar jangkauan");
}

let angka = [10, 20, 30];
let kata = ["satu", "dua", "tiga"];

console.log(getElementAtIndex(angka, 1)); // Output: 20
console.log(getElementAtIndex(kata, 0)); // Output: "satu"
