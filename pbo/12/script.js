// Script utama di browser
if (window.Worker) {
    const myWorker = new Worker('worker.js');

    myWorker.postMessage(10); // Mengirim angka 10 ke worker

    myWorker.onmessage = function(e) {
        console.log('Hasil faktorial:', e.data); // Output: Hasil faktorial: 3628800
    }
}
