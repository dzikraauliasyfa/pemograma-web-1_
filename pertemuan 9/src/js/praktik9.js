// Soal 1
function hitungLingkaran(){
    var radius = document.getElementById("radius").value;
    if (radius > 0){
        var laus = 3.14 * radius * radius;
        var keliling = 2 * 3.14 * radius;
        document.getElementById(lingkaranOutput").
        innerText = "Luas : " + lauas + "cm², Keliling : "
        + keliling + "cm²";
    }else {
        document.getElementById("lingkaranOutput")
        innerText = "Masukan jari-jari yang valid!";
    }
}

// Soal 2
function hitunganDuit(){
    var rupiah = document.getElementById("rupiah").value;
    if (rupiah > 0){
        var kurs = 15870;
        var dollar = rupiah / kurs;
        document.getElementById("hasilDuit").innerText =
        "Nilai : $ " + dollar.toFixed(2);
    } else{
        document.getElementById("hasilDuit").innerText =
        "Masukan Nilai yang Valid !!"
    }

}

// Soal 3
function hitungPenjumlahan(){
    var biL2 = parseFloat(
        document.getElementById
        ("biL2").value) || 0;
    var biL2 = parseFloat(
       document.getElementById
        ("biL2").value) || 0;
    var jumlah = biL1 + biL2; 
       document.getElementById(
        "hasilJumlah")
        .innerText ="Jumlah: "
        + jumlah.toFixed(2);
}