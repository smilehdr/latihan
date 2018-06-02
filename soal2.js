function numberCruncher(arr) {
    var arrJumlah = [];
    var jumlah = 0;
    for(var i = 0; i< arr.length; i++) {
      if(i == 0) {
          jumlah = arr[i] + arr[i+1];
      }
      else if(i == arr.length -1) {
        jumlah = arr[i] + arr[i-1];
      }
      else {
        jumlah = arr[i-1] + arr[i] + arr[i+1];
      }
      arrJumlah.push(jumlah);
      jumlah = 0;
    }
    jumlah = 0;
    for(var x = 0; x<arrJumlah.length;x++) {
      if(arrJumlah[x] % 2 != 0) {
        jumlah += arrJumlah[x];
      }
    }
    return jumlah;
  }
  
  console.log(numberCruncher([2, 3, 1, 4, 1, 5, 0, 3]));