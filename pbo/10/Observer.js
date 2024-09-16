// Subject
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

// Observer
class Observer {
    update(data) {
        console.log(`Data diperbarui: ${data}`);
    }
}

// Penggunaan
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("Data baru!"); 
// Output:
// Data diperbarui: Data baru!
// Data diperbarui: Data baru!
