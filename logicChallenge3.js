function cariMean(arr) {
    // you can only write your code here!
    var jumlah = 0;
    for(var i = 0; i< arr.length;i++) {
      jumlah += parseInt(arr[i]);
    }
    return Math.round(jumlah / arr.length);
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7

  
  //Perkalian Unik
  function perkalianUnik(arr) {
    // you can only write your code here!
    var hasilperkalianarr = [];
    var hasilkali = 1;
    for(var i = 0; i< arr.length; i++) {
       hasilkali = 1;
      for(var j = 0; j < arr.length; j++) {
        if(i != j) {
          hasilkali *= arr[j];
        }
      }
      hasilperkalianarr.push(hasilkali);
    }
    return hasilperkalianarr;
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

  
  //Tentukan Deret Aritmatika
  function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var selisihsebelum = 0;
    var selisihsetelah = 0;
    for(var i = 0; i< arr.length-1;i++) {
      if(i>0)
      {
        if(selisihsebelum != parseInt(arr[i+1]) - parseInt(arr[i])) {
          
          return false;
        }
        selisihsebelum = parseInt(arr[i+1]) - parseInt(arr[i]);
      }
      else {
        selisihsebelum = parseInt(arr[i+1]) - parseInt(arr[i]);
      }
    }
    return true;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

  
  //Tentukan Deret Geometri
  function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var kaliSebelum = 0;
    for(var i = 0; i< arr.length-1;i++) {
      if(i>0)
      {
        if(kaliSebelum != parseInt(arr[i+1]) / parseInt(arr[i])) {
          
          return false;
        }
        kaliSebelum = parseInt(arr[i+1]) / parseInt(arr[i]);
      }
      else {
        kaliSebelum = parseInt(arr[i+1]) / parseInt(arr[i]);
      }
    }
    return true;
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
  