function hitungDiskon(tipe, harga) {
    if (tipe === 'reguler') {
        return harga * 0.9;
    } else if (tipe === 'premium') {
        return harga * 0.8;
    } else if (tipe === 'vip') {
        return harga * 0.7;
    } else {
        return harga;
    }
}


function hitungDiskon(tipe, harga) {
    const diskon = {
        'reguler': 0.9,
        'premium': 0.8,
        'vip': 0.7
    };

    return harga * (diskon[tipe] || 1);
}
