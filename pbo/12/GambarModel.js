class GambarModel {
    constructor() {
        this.worker = new Worker('gambarWorker.js');
    }

    prosesGambar(data, callback) {
        this.worker.postMessage(data);
        this.worker.onmessage = function(e) {
            callback(e.data);
        }
    }
}
