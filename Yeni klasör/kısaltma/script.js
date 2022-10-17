"use strict"

let gizliNumara = Math.trunc(Math.random() * 20)  + 1;
let puan = 20;
let yüksekPuan = 0;

// Mesaj kısmını fonksiyon olarak yazdık ki tekrar aynı şeyleri yazmayalım.
const ekranMesajı = function(mesaj){
    document.querySelector(".message").textContent = mesaj;
}
// Check butonu ile ilgili kodlar
document.querySelector(".check").addEventListener("click",function(){
    const tahmin = Number(document.querySelector(".guess").value);
    console.log(typeof tahmin, tahmin);
    if(!tahmin){
        ekranMesajı("Sayı yok")
        // Oyuncu kazanırsa
    }else if(tahmin === gizliNumara){
        ekranMesajı("Doğru Sayı")
        document.querySelector(".number").textContent = gizliNumara;
        document.querySelector("body").style.backgroundColor = "#3D8361";
        document.querySelector(".number").style.width = "30rem";
        if(puan > yüksekPuan){
            yüksekPuan = puan;
            document.querySelector(".highscore").textContent = yüksekPuan;
        }
     }
    // Buradaki satırlar hep birbirini tekrar ediyor. Bunun önüne geçmek için yorum satırının altındaki kodları yazıyoruz.
    //else if(tahmin > gizliNumara){
    //     ekranMesajı("Yüksek Sayı")
    //     if(puan > 1){
    //         puan--
    //         document.querySelector(".score").textContent = puan
    //     }else{
    //         document.querySelector("body").style.backgroundColor="#EB1D36"
    //         ekranMesajı("Tekrar dene :(")
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }else if(tahmin < gizliNumara){
    //     ekranMesajı("Küçük Sayı")
    //     if(puan > 1){
    //         puan--
    //         document.querySelector(".score").textContent = puan;
    //     }else{
    //         document.querySelector("body").style.backgroundColor="#EB1D36"
    //         ekranMesajı("Tekrar Dene :(")
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
    else if(tahmin !== gizliNumara){
        if(puan > 1){
            ekranMesajı(tahmin > gizliNumara ? "Çok Yüksek" : "Çok Düşük");
            puan--
            document.querySelector(".score").textContent = puan;
        }else{
            ekranMesajı("Tekrar Dene :(");
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor="#EB1D36"
        }
    }
});
// Again Butonu
document.querySelector(".again").addEventListener("click",function(){
puan = 20;
gizliNumara = Math.trunc(Math.random()*20) +1;
document.querySelector(".score").textContent = puan;
ekranMesajı("Start Guessing...")
document.querySelector(".guess").textContent = " ";
document.querySelector(".number").textContent = "?";
// Style
document.querySelector("body").style.backgroundColor= "#222";
document.querySelector(".number").style.width = "15rem";
})

