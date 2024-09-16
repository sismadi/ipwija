class View {
    update(data) {
        console.log(`View diperbarui dengan data: ${data}`);
    }
}

class DataModel {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    updateData(newData) {
        console.log(`Data model diperbarui: ${newData}`);
        this.observers.forEach(observer => observer.update(newData));
    }
}

// Penggunaan
const view = new View();
const dataModel = new DataModel();

dataModel.addObserver(view);
dataModel.updateData("Data terbaru"); 
// Output:
// Data model diperbarui: Data terbaru
// View diperbarui dengan data: Data terbaru
