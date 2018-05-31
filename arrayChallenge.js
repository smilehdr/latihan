//Looping Data Array
var inputs = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

for(var i = 0;i < inputs.length;i++) {
    console.log("Nomor ID: " + inputs[i][0]);
    console.log("Nama Lengkap: " + inputs[i][1]);
    console.log("TTL: " + inputs[i][2] + " " + inputs[i][3]);
    console.log("Hobi: " + inputs[i][4]);
    
}

///Built-in Function pada Array
var inputs = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] ;
function dataHandling2(input) {
    var kota = input[2];
    var nama = input[1];
    input.splice(1,1);
    input.splice(1,0,nama + " Elsharawy");
    input.splice(2,1);
    input.splice(2,0,"Provinsi " + kota);
    input.splice(4,1);
    input.splice(4,0,"Pria","SMA International Metro")

    var tanggal = input[3];
    var tanggalSplit = tanggal.split("/");
    var tanggalSplit2 = tanggal.split("/");
    var tanggalSortDesc = tanggalSplit;
    tanggalSortDesc.sort(function(value1, value2) { return value2 - value1 });

    var bulan = tanggalSplit[1];
    var namaBulan = "";

    var namaSlice = nama.slice(0,15);

    switch(bulan){
      case "01" : {
        namaBulan = "Januari";
        break;
      }
      case "02" : {
        namaBulan = "Febuari";
        break;
      }
      case "03" : {
        namaBulan = "Maret";
        break;
      }
      case "04" : {
        namaBulan = "April";
        break;
      }
      case "05" : {
        namaBulan = "Mei";
        break;
      }
      case "06" : {
        namaBulan = "Juni";
        break;
      }
      case "07" : {
        namaBulan = "Juli";
        break;
      }
      case "08" : {
        namaBulan = "Agustus";
        break;
      }
      case "09" : {
        namaBulan = "September";
        break;
      }
      case "10" : {
        namaBulan = "Oktober";
        break;
      }
      case "11" : {
        namaBulan = "November";
        break;
      }
      case "12" : {
        namaBulan = "Desember";
        break;
      }
      default : {
        namaBulan = "";
      }
    }

    console.log(input);
    console.log(namaBulan);
    console.log(tanggalSortDesc);
    console.log(tanggalSplit2.join("-"));
    console.log(namaSlice);
}

dataHandling2(inputs);