//Target terdekat
function targetTerdekat(arr) {
    // you can only write your code here!
    var jarakTerdekat = 0;
    var xIndex = -1;
    var oIndex = -1;
    for(var i=0;i< arr.length;i++) {
      jarakTerdekat = 0;
      if(arr[i] == 'x') {
        xIndex = i;
      }
      if(arr[i] == 'o') {
        oIndex = i;
        for(var j=i;j<arr.length;j++) {
          if(arr[j] == 'x') {
            return jarakTerdekat;
          }
          jarakTerdekat++;
        }
      }
      if(jarakTerdekat == 0) {
        if(xIndex != -1) {
          jarakTerdekat = oIndex - xIndex;
        }
      }
    }
    return jarakTerdekat;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

  
  //Mengelompokkan Angka
  function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var arrGenap = [];
    var arrGanjil = [];
    var arrKelipatan3 = [];
    var returnArr = [];
  
    for(var i = 0; i< arr.length; i++) {
      if(arr[i]% 2 == 0 && arr[i] % 3 !=0) {
        arrGenap.push(arr[i]);
      }
      else if(arr[i]% 2 != 0 && arr[i] % 3 !=0) {
        arrGanjil.push(arr[i]);
      }
  
      if(arr[i] % 3 == 0) {
        arrKelipatan3.push(arr[i]);
      }
    }
    returnArr.push(arrGenap);
    returnArr.push(arrGanjil);
    returnArr.push(arrKelipatan3);
    return returnArr;
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]


  //Mengelompokkan Hewan
  function groupAnimals(animals) {
    // you can only write your code here!
    var arrGroup = [];
    var arrSort = [];
    var hurufPertamaBefore = "";
    animals.sort();
    for(var i = 0; i< animals.length; i++) {
      if(hurufPertamaBefore == "" ) {
        hurufPertamaBefore = animals[i].substring(0,1);
      }
      if(hurufPertamaBefore != animals[i].substring(0,1)) {
        hurufPertamaBefore = animals[i].substring(0,1);
        arrGroup.push(arrSort);
        arrSort = [];
      }
      arrSort.push(animals[i]);
    }
    arrGroup.push(arrSort);
    return arrGroup;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
  