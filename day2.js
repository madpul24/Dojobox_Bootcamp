// // alert('Selamat datang kembali, Semangat!');
// var namaVariable = '1234';
// document.write(typeof(namaVariable) + '<br>');
// namaVariable = 1234;
// document.write(typeof(namaVariable) + '<br>');
// namaVariable = true;

// var namaPengguna = prompt('Silahkan masukkan nama kamu',"Dojobox Setia");

// document.write('Hai ' + namaPengguna + ', Selamat Datang di DOJOBOX.id');

// var konfirmasi = confirm("Mau Tetap disini kan ? ")
// var hasil = (konfirmasi==true)? "Iya dong" : "Gak deh"
// document.write(hasil + "<br>")

// var angka = parseInt(prompt("masukkan angka yang mau di test : "));

// if(angka>10){
//     documen5t.write("bilangan yang dimasukkan lebih dari 10");
// }

// var nama ='Saiful'
// var nama = prompt('masukkan nama : ','nama pengunjung');

// if (nama=='Saiful'){
//     document.write('Seorang QA Engineering')
// }else{
//     document.write('nama yang dimasukkan bukan Saiful')
// }

var nilai = prompt('masukkan angka :');
if(nilai % 2 == 0){
    document.write(nilai + ' merupakan bilangan genap')
}else if(nilai % 2 == 1){
    document.write(nilai + ' merupakan bilangan ganjil')
}else{
    document.write(nilai + ' bukan merupakan bilangan')
}


// var nilai = parseInt(prompt("masukkan nilai kepuasan anda","0-100"));
// switch(true){
//     case (nilai>=90):
//         document.write('Nilai Kamu adalah A')
//         break
//     case (nilai>=80):
//         document.write('Nilai Kamu adalah B')
//         break
//     case (nilai>=70):
//         document.write('Nilai Kamu adalah C')
//         break
//     case (nilai>=60):
//         document.write('Nilai Kamu adalah D')
//         break
//     default:
//         document.write("Nilai Kamu adalah E, Silahkan Remedi")
// }