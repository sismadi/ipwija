function tambah(a, b) {
    return a + b;
}

module.exports = tambah;

javascript
Copy code
// fungsi.test.js
const tambah = require('./fungsi');

test('menambah 1 + 2 sama dengan 3', () => {
    expect(tambah(1, 2)).toBe(3);
});
