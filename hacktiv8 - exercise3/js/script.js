const angka_pertama = document.getElementById('angka_pertama');
const angka_kedua = document.getElementById('angka_kedua');
const btnTambah = document.getElementById('btn-tambah');
const btnKurang = document.getElementById('btn-kurang');
const btnKali = document.getElementById('btn-kali');
const btnBagi = document.getElementById('btn-bagi');
let textHasil = document.getElementById('hasil');

btnTambah.addEventListener('click', function(){
    let angkaPertama = parseInt(angka_pertama.value);
    let angkaKedua = parseInt(angka_kedua.value);
    let hasil = "";

    if(isNaN(angkaPertama) || isNaN(angkaKedua)){
        textHasil.textContent = "Isi dulu woy angkanya!";
    } else{
        hasil = angkaPertama + angkaKedua;
        textHasil.textContent = hasil;
    }
});

btnKurang.addEventListener('click', function(){
    let angkaPertama = parseInt(angka_pertama.value);
    let angkaKedua = parseInt(angka_kedua.value);
    let hasil = "";
    hasil = angkaPertama - angkaKedua;
    textHasil.textContent = hasil;
});

btnKali.addEventListener('click', function(){
    let angkaPertama = parseInt(angka_pertama.value);
    let angkaKedua = parseInt(angka_kedua.value);
    let hasil = "";
    hasil = angkaPertama * angkaKedua;
    textHasil.textContent = hasil;
});

btnBagi.addEventListener('click', function(){
    let angkaPertama = parseInt(angka_pertama.value);
    let angkaKedua = parseInt(angka_kedua.value);
    let hasil = "";
    hasil = angkaPertama / angkaKedua;
    textHasil.textContent = hasil;
});


