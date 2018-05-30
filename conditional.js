//Conditional If

var nama = "Mikael";
var peran = "";

if(nama == "" && peran =="") {
    alert("Nama harus diisi!");
}
else if(nama != "" && peran == "") {
    alert("Halo" + nama + ", Pilih peranmu untuk memulai game!");
}
else if(nama != "" && peran != "") {
    alert("Selamat datang di Dunia Proxytia, " + nama);
    if(peran === "Ksatria")
    {
        alert ("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
    }
    else if(peran === "Tabib") {
        alert("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka");
    }
    else if(peran === "Penyihir") {
        alert("Halo Penyihir " + nama +" , ciptakan keajaiban yang membantu kemenanganmu!");
    }
}

//Conditional Switch Case
var tanggal = 21;
var bulan = 4;
var tahun = 2018;
var namaBulan = "aa";

if(tanggal>=1 && tanggal <=31) {
    if(bulan>=1 && bulan <=12) {
        if(tahun>=1900 && tahun <=2200) {
            switch(bulan) {
                case 1 :{
                    namaBulan = "Januari";
                    break; 
                }
                case 2 : {
                    namaBulan = "Febuari";
                    break;
                }
                case 3 : {
                    namaBulan = "Maret";
                    break;
                }
                case 4 : {
                    namaBulan = "April";
                    break;
                }
                case 5 : {
                    namaBulan = "Mei";
                    break;
                }
                case 6 : {
                    namaBulan = "Juni";
                    break;
                }
                case 7 : {
                    namaBulan = "Juli";
                    break;
                }
                case 8 : {
                    namaBulan = "Agustus";
                    break;
                }
                case 9 : {
                    namaBulan = "September";
                    break;
                }
                case 10 : {
                    namaBulan = "Oktober";
                    break;
                }
                case 11 : {
                    namaBulan = "November";
                    break;
                }
                case 12 : {
                    namaBulan = "Desember";
                    break;
                }
                default : {
                    namaBulan = "";
                }
                    
            }
            alert(tanggal + " " + namaBulan + " " + tahun);
        }
    }
}