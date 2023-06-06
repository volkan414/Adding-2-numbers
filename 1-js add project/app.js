let sayi1 = document.querySelector("#s1");
let sayi2 = document.querySelector("#s2");
let hesapBtn = document.querySelector("#btn")
let sonuc = document.querySelector(".sonuc");

hesapBtn.onclick=function hesapla(){
    let toplam = Number(sayi1.value)+Number(sayi2.value);
    sonuc.innerHTML=toplam;
};

