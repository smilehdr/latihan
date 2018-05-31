//Palindrome
function palindrome(kata) {
    var katabalik = "";
    for(var i = kata.length-1; i>=0;i--) {
      katabalik += kata[i];
    }
    if(kata === katabalik) {
      return true;
    }
    return false;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false

  
  //Number Palindrome
  function angkaPalindrome(num) {
    // you can only write your code here!
    var gotPalindrome = false;
    var numPalindrome;
    var tampungPalindrome;
    
    while(gotPalindrome == false) {
      num = num + 1;
      numPalindrome = num.toString();
      tampungPalindrome = "";
      for(var i = numPalindrome.length -1;i>=0;i--) {
          tampungPalindrome += numPalindrome[i];
      }
      if(numPalindrome === tampungPalindrome ) {
        gotPalindrome=true;
        break;
      }
    }
    return numPalindrome;
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

  //Menghitung Jumlah Kata
  function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var jumlahKata = kalimat.split(" ").length;
    return jumlahKata
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

  
  //Pasangan Angka Terbesar

  function pasanganTerbesar(num) {
    // you can only write your code here!
    var numString = num.toString();
    var prevString;
    var biggest = 0;
    for(var i = 0 ; i<numString.length;i++) {
      prevString = numString.substr(i,2);
      if(parseInt(prevString) > parseInt(biggest)) {
        biggest = parseInt(prevString);
      }
    }
    return biggest;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  