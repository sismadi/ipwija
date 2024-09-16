# Contoh Sinkronisasi dengan Mutex
mutex = Mutex()

def tugas1():
    mutex.lock()
    # Akses ke sumber daya bersama
    print("Tugas 1 menjalankan operasi")
    mutex.unlock()

def tugas2():
    mutex.lock()
    # Akses ke sumber daya bersama
    print("Tugas 2 menjalankan operasi")
    mutex.unlock()

# Contoh Deadlock
def deadlock_example():
    lock1 = Mutex()
    lock2 = Mutex()

    def thread1():
        lock1.lock()
        sleep(1) # Simulasi operasi
        lock2.lock() # Menunggu lock2 yang dipegang oleh thread2
        lock2.unlock()
        lock1.unlock()

    def thread2():
        lock2.lock()
        sleep(1) # Simulasi operasi
        lock1.lock() # Menunggu lock1 yang dipegang oleh thread1
        lock1.unlock()
        lock2.unlock()
