
var kubusA = parseInt(prompt("Masukkan nilai sisi kubus A : "));
var kubusB = parseInt(prompt("Masukkan nilai sisi kubus B : "));

function volumeKubus(sisi){
    var volume
    volume = sisi * sisi * sisi
    return volume
}

function jumlahVolumeKubus(a,b){
    var total
    var volumeKubusA
    var volumeKubusB

    volumeKubusA = volumeKubus(a);
    volumeKubusB = volumeKubus(b);

    total = a + b
    return total
}

document.write('Sisi kubus A        : ' + kubusA + "<br>");
document.write('Sisi kubus B        : ' + kubusB + '<br>');
document.write('Volume Kubus A      : ' + volumeKubus(kubusA) + '<br>');
document.write('Volume kubus B      : ' + volumeKubus(kubusB) + '<br>');
document.write('Jumlah volume kedua kubus       :   ' + jumlahVolumeKubus(volumeKubus(kubusA), volumeKubus(kubusB)) + '<br>')
