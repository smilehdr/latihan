function changeMe(arr) {
    // you can only write your code here!
    var changeMeObj;
  
    for(var i = 0; i< arr.length; i++) {
      changeMeObj = {
        firstName : arr[i][0],
        lastName : arr[i][1],
        gender : arr[i][2],
        age : ((new Date()).getFullYear() - arr[i][3]) == isNaN ? "Invalid Birth Year" : (new Date()).getFullYear() - arr[i][3]
      }
      console.log(i + 1 + ". " + changeMeObj.firstName + " " + changeMeObj.lastName);
      console.log(changeMeObj);
    }
    
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""

  
  //Shopping Time!
  function shoppingTime(memberId, money) {
    // you can only write your code here!
    var arrSale = [['Sepatu Stacattu',1500000],['Baju Zoro',500000],['Baju H&N',250000],['Sweater Unikloh',175000],['Casing HP',50000]];
    var sisaUang = money;
    var ShoopingObj;
    var isStilHaveMoney = true;
    var listPurchased = [];
    if(memberId == "" || memberId == null) {
      return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }
    if(money < 50000) {
      return "Mohon maaf, uang tidak cukup";
    }
    ShoopingObj = {
      memberId : memberId,
      money : money
    }
    for(var i = 0; i< arrSale.length; i++) {
      if(sisaUang >= arrSale[i][1]) {
        listPurchased.push(arrSale[i][0]);
        sisaUang -= arrSale[i][1];
      }
      
    }
    ShoopingObj.listPurchased = listPurchased;
    ShoopingObj.changeMoney = sisaUang;
    return ShoopingObj;
  
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

  //Toko X
  function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    var belanjaObj = {};
    var shopper = [];
    var leftOver = 0;
    var totalProfit = 0;
    var belanjaGroup = [];
    // you can only write your code here!
    for(var j=0; j < listBarang.length;j++) {
      belanjaObj.product = listBarang[j][0];
        shopper = [];
        leftOver = listBarang[j][2];
      for(var i = 0; i< shoppers.length;i++) {
        if(belanjaObj.product == shoppers[i].product) {
          shopper.push(shoppers[i].name);
          if(leftOver< shoppers[i].amount) {
            leftOver = 0;
            totalProfit = 0;
          }
          leftOver = leftOver - shoppers[i].amount;
        }
      }
      belanjaObj.shopper = shopper;
      belanjaObj.leftOver = leftOver;
      belanjaObj.totalProfit = leftOver * listBarang[j][1];
      belanjaGroup.push(belanjaObj);
      belanjaObj = {};
    }
    return belanjaGroup;
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]
  