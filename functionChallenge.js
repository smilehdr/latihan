//Tugas 1
function shoutOut() {
    return "Halo function!";
}

console.log(shoutOut());

//Tugas 2
function calculateMultiply(angka1, angka2) {
    return angka1 * angka2;
}
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

//Tugas 3
function processSentence(name,age,address,hobby) {
    return "Nama saya " +name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan suka " + hobby;
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);