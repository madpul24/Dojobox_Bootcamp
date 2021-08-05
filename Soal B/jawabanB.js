var namaBarang = prompt("masukkan nama barang yang dicari : " + "<br>");
switch(true){
    case (namaBarang>=electronic):
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
    default:
        document.write("Maaf barang yang cari tidak tersedia")
}

var electronic = [];
electronic = ["Monitor","Laptop","TV","Kulkas","Mesin Cuci"]
