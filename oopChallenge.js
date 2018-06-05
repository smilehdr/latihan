//Membuat Class dan Meng-Instance nya
class Kalkulator{
    constructor(angka1, angka2) {
      this.angka1 = angka1;
      this.angka2 = angka2;
      this.hasil = 0;
    }
  
    tambah() {
      this.hasil = this.angka1 + this.angka2;
    }
  
    kurang() {
      this.hasil = this.angka1 - this.angka2;
    }
  
    kali() {
      this.hasil = this.angka1 * this.angka2;
    }
  
    bagi() {
      this.hasil = this.angka1 / this.angka2;
    }
  
  }
  // test code
  
  const angka1 = 2
  const angka2 = 3
  const kalkulator = new Kalkulator(angka1, angka2)
  
  kalkulator.tambah()
  console.log(kalkulator.hasil) // 5
  kalkulator.kurang()
  console.log(kalkulator.hasil) // -1
  kalkulator.kali()
  console.log(kalkulator.hasil) // 6
  kalkulator.angka1 = 6
  kalkulator.angka2 = 2
  kalkulator.bagi()
  console.log(kalkulator.hasil) // 3

  
  //Melakukan inheritance terhadap Class.
  class Hewan {
      constructor(tinggi,berat,jeniskelamin) {
          this.tinggi = tinggi;
          this.berat = berat;
          this.jeniskelamin = jeniskelamin;
          this.jalan = false;
      }

      jalan() {
        this.jalan = true;
      }

      berhenti() {
          this.jalan = false;
      }
  }

  class Gajah extends Hewan {
    constructor(tinggi,berat,jeniskelamin) {
        super(tinggi,berat,jeniskelamin);
        this.belalai = false;
    }

    naikBelalai() {
        this.belalai = true;
    }
  }

  class Monyet extends Hewan {
    constructor(tinggi,berat,jeniskelamin) {
        super(tinggi,berat,jeniskelamin);
        this.panjat = false;
    }

    manjatPohon() {
        this.panjat = true;
    }

    turunDariPohon () {
        this.panjat = false;
    }
  }