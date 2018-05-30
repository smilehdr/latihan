//Bandingkan Angka
function bandingkanAngka(angka1, angka2) {
    // you can only write your code here!
    if(angka1 ==angka2) {
        return -1;
    }
    else if(angka2 > angka1) {
        return true;
    }
    else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false
  

//Balik Kata
function balikKata(kata) {
    var lengthKata = kata.length;
    var katabalik = "";
    for(var i = lengthKata-1;i>=0; i--) {
        katabalik += kata[i];
    }
    return katabalik;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

//Konversi Menit
function konversiMenit(menit) {
// you can only write your code here!
    var jam ;
    var sisaMenit;
    if(menit>=60) {
        jam = Math.round(menit / 60);
    }
    else {
        jam = 0;
    }
    sisaMenit = menit - (jam * 60);
    if(sisaMenit <10) {
        sisaMenit = "0" + sisaMenit;
    }
    return jam + ":" + sisaMenit ;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

//X dan O
function xo(str) {
    var jlhx = 0;
    var jlho = 0;
    for(var i=0; i< str.length; i++) {
        if(str[i] == "x") {
            jlhx++;
        }
        else {
            jlho++;
        }
    }
    if(jlho == jlhx) {
        return true;
    }
    else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
      