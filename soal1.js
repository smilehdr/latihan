function drawThreeColsBox(tinggi) {
    var angka = 1;
    var strAngka = "";
    for(var i = 1;i<= tinggi;i++) {
      strAngka = "";
      for(var j=1;j<=3;j++) {
          strAngka = strAngka + " " + angka;
          angka++;
      }
      console.log(strAngka);
    }
}

drawThreeColsBox(1);