var flag = 1;
console.log("LOOPING PERTAMA");
while(flag<=20) {
    if(flag % 2 == 0) {
        console.log(flag + "  - I love coding");
    }
    flag++;
}

console.log("LOOPING KEDUA");
while(flag>=2) {
    if(flag % 2 == 0) {
        console.log(flag + "  - I will become  developer");
    }
    flag--;
}

//Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA");
for(var i = 1;i<=20; i++) {
    if(i % 2 == 0) {
        console.log(i + "  - I love coding");
    }
}

console.log("LOOPING KEDUA");
for( i = 20;i>=2; i--) {
    if(i % 2 == 0) {
        console.log(i + "  - I will become  developer");
    }
}

//Angka Ganjil dan Genap
for(var i=1;i<=100; i++) {
    if(i%2 == 0) {
        console.log("GENAP ");
    }
    else {
        console.log("GANJIL ");
    }
}

for(var i =1;i<=100;i= i+2) {
    if(i % 3 == 0) {
        console.log( i + " kelipatan 3");
    }
}
for(var i =1;i<=100;i= i+5) {
    if(i % 6 == 0) {
        console.log( i + " kelipatan 6");
    }
}

for(var i =1;i<=100;i= i+9) {
    if(i % 10 == 0) {
        console.log( i + " kelipatan 10");
    }
}

//Menyusun Barisan Bintang
var rows1 = 5;
for(var i = 1; i<=rows1;i++) {
    console.log("*");
}

var rows2 = 5;
var output2 = "";
for(var i = 1;i<=rows2; i++) {
    output2 = "";
    for(var x=1;x<=rows2;x++) {
        output2 += "*";
    }
    console.log(output2);
}

var rows3 = 5;
var output3 = "";
for(var i = 1;i<=rows3; i++) {
    output3 = "";
    for(var x=1;x<=i;x++) {
        output3 += "*";
    }
    console.log(output3);
}