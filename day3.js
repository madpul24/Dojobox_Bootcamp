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

// var volumeKubus = function(a,b,c){
//     volume = a*b*c
//     return volume
// }

// document.write('volume kubus a adalah ', volumeKubus(8,8,8), '<br>')
// document.write('volume kubus a adalah ', volumeKubus(4,4,4), '<br>')
