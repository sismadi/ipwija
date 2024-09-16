// Menggunakan List (Array)
let listMahasiswa = ["Budi", "Siti", "Agus"];
listMahasiswa.push("Ani"); // Menambahkan elemen baru
console.log(listMahasiswa); // Output: ["Budi", "Siti", "Agus", "Ani"]

// Menggunakan Set
let setMahasiswa = new Set(["Budi", "Siti", "Agus"]);
setMahasiswa.add("Ani");
setMahasiswa.add("Budi"); // Tidak akan menambahkan karena Budi sudah ada
console.log(setMahasiswa); // Output: Set(4) {"Budi", "Siti", "Agus", "Ani"}

// Menggunakan Map
let mapNilai = new Map();
mapNilai.set("Budi", 90);
mapNilai.set("Siti", 85);
console.log(mapNilai.get("Budi")); // Output: 90
