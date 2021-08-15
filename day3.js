
// var kubusA = parseInt(prompt("Masukkan nilai sisi kubus A : "));
// var kubusB = parseInt(prompt("Masukkan nilai sisi kubus B : "));

// function volumeKubus(sisi){
//     var volume
//     volume = sisi * sisi * sisi
//     return volume
// }

// function jumlahVolumeKubus(a,b){
//     var total
//     var volumeKubusA
//     var volumeKubusB

//     volumeKubusA = volumeKubus(a);
//     volumeKubusB = volumeKubus(b);

//     total = a + b
//     return total
// }

// document.write('Sisi kubus A        : ' + kubusA + "<br>");
// document.write('Sisi kubus B        : ' + kubusB + '<br>');
// document.write('Volume Kubus A      : ' + volumeKubus(kubusA) + '<br>');
// document.write('Volume kubus B      : ' + volumeKubus(kubusB) + '<br>');
// document.write('Jumlah volume kedua kubus       :   ' + jumlahVolumeKubus(volumeKubus(kubusA), volumeKubus(kubusB)) + '<br>')

// ++ 1. literal declaration
// var mahasiswa = {
//     //property
//     nama : 'Saiful',
//     NIM : '21020304321',
//     email : 'saiful@gmail.com',

//     //method
//     getName: function(){
//         console.log('Nama saya adalah : ' + this.nama)
//     },
//     getEmail: function(){
//         console.log('Email saya adalah : ' + this.email + '<br>')
//     },
// }

// ++ 2. Constructor
function mahasiswa(nama,nim,email){
    this.nama = nama;
    this.email = email;
    this.nim = nim;
}

var mahasiswa1 = new mahasiswa('Saiful','21020304321','saiful@gmail.com')

//object create
