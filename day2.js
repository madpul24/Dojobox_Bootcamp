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

// var namaVariable
// let namaVariableMenggunakanLet
// const phi = 3.14;
// const percepatanGravitasi = 10;

// var nilai = prompt('masukkan angka :');
// if(nilai % 2 === 0){
//     //kondisi true
//     document.write(nilai + ' merupakan bilangan genap')
// }else if(nilai % 2 === 1){
//     document.write(nilai + ' merupakan bilangan ganjil')
// }else{
//     document.write(nilai + ' bukan merupakan bilangan')
// }


var nilai = parseInt(prompt("masukkan nilai kepuasan anda","0-100"));
switch(true){
    case (nilai>=90):
        document.write('Nilai Kamu adalah A')
        break
    case (nilai>=80):
        document.write('Nilai Kamu adalah B')
        break
    case (nilai>=70):
        document.write('Nilai Kamu adalah C')
        break
    case (nilai>=60):
        document.write('Nilai Kamu adalah D')
        break
    case (nilai>=50):
        document.write('Nilai Kamu adalah E')
        break
    default:
        document.write("Inputan Salah")
}

// ++ looping : while ++
// var ulang = 1;

// while(ulang<=10){
//     document.writeln('halo dojobers' +'<br>' );
//     //console.log('hai dobo')
//     ulang += 1;
// }

// ++ looping : for ++

// for(var iterator =1; iterator<=10; iterator++){
//     document.write('hai dojobox ini for' +"<br>")
// }

// ++ tugas ++
// ++ aplikasi informasi data siswa 
// ++ siswa 1-5 adalah member TA Vista ditulis menggunakan perulangan while
// ++ siswa 6-10 adalah member TA Intan ditulis menggunakan perulangan for 

    // var siswa = 1;

    // while(siswa<=5){
    //     document.write('nomor induk ' + siswa + ' kamu member TA Vista' +'<br>' );
    //     siswa +=1;
    // }

    // for(var iterator = 6; iterator<=10; iterator++){
    //     document.write('nomor induk ' + iterator + ' kamu member TA Intan' +'<br>' );
    // }

// ++ Array ++

var buah = [];
buah = ['apel', 'belimbing', 'cempedak','duku', 'salak','pisang']

// document.write(typeof(buah) + '<br>')
// document.write(buah);
// document.write('<br>');
// document.write(buah.length);
// document.write('<br>');
// document.write(buah[4]);
// document.write('<br>');

// var iniAdalahFungsi = function(){
//     alert('hai dojobers');
// }
// var myArr = ['teks', 1234, true, iniAdalahFungsi,[2,3,4] ]
// document.write('<br>');
// document.write(myArr[4][1]);

// var myArr2 = []
// myArr2[0]= 'senin';
// myArr2[1]= 'selasa';
// // myArr2[2]empty
// myArr2[3]= 'kamis';
// myArr2[3]=undefined;
// myArr2[2]= 'rabu';

// ++ 1. join ++
// document.write(buah);
// document.write(buah.join('<br>'))

// ++ 2.push n pop ++
// ++ bekerja di akhir element ++
// ++ push menambahkan element diakhir ++
// buah.push('duren');
// document.write(buah.join('<br>'))
 // ++ pop ++
 // ++ menghapus ++
// buah.pop()
// document.write(buah.join('<br>'))

// ++ 3. unshift dan shift ++
// ++ unshift digunakan untuk menambahkan array di awal element
// buah.unshift('jambu');
// document.write(buah.join('<br>'))
// document.write('<br>');
// ++ shift digunakan untuk menghilangkan array di awal element
// document.write('<br>');
// buah.shift();
// document.write(buah.join('<br>'))

// ++ 4. splice ++
// ++ splice (index awal, jmlhapus, elementbaru1, ..., elementbarun)
document.write('<br>');
buah.splice(2,2,'jeruk','semangka')
// document.write('<br>');
// document.write(buah.join('<br>'))

// ++ 5. slice (memotong) ++
var newBuah = buah.slice(1,4)
document.write('<br>');
document.write('<br>');

// document.write(newBuah.join('<br>'))

// ++ 6. for each dan map ++
// ++ for each : tidak mengembalikan array
buah.forEach(function(e,i){
    document.write(i + ' = ' + e + "<br>")
})

document.write('<br>');
document.write('<br>');

buah.forEach(function(e,i){
    document.write((i+1) + '. ' + e + '<br>') 
})

// ++ 7. Map : mengembalikan array
var buahBaru = buah.map(function(e, i){
    return e + ' enak dimakan'
})
document.write('<br>');
document.write('<br>');
document.write(buahBaru.join('<br>'))