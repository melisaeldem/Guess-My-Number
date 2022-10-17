"use strict"

let gizliNumara = Math.trunc(Math.random() * 20)  + 1;
let puan = 20;
let yüksekPuan = 0;

// Check butonu ile ilgili kodlar
document.querySelector(".check").addEventListener("click",function(){
    const tahmin = Number(document.querySelector(".guess").value);
    console.log(typeof tahmin, tahmin);
    if(!tahmin){
        document.querySelector(".message").textContent = "Sayı yok";
    }else if(tahmin === gizliNumara){
        document.querySelector(".message").textContent = "Doğru sayı";
        document.querySelector(".number").textContent = gizliNumara;
        document.querySelector("body").style.backgroundColor = "#3D8361";
        document.querySelector(".number").style.width = "30rem";
        if(puan > yüksekPuan){
            yüksekPuan = puan;
            document.querySelector(".highscore").textContent = yüksekPuan;
        }
    }else if(tahmin > gizliNumara){
        document.querySelector(".message").textContent = "Yüksek sayı";
        if(puan > 1){
            puan--
            document.querySelector(".score").textContent = puan
        }else{
            document.querySelector("body").style.backgroundColor="#EB1D36"
            document.querySelector(".message").textContent = "Tekrar Dene :(";
            document.querySelector(".score").textContent = 0;
        }
    }else if(tahmin < gizliNumara){
        document.querySelector(".message").textContent = "Küçük sayı";
        if(puan > 1){
            puan--
            document.querySelector(".score").textContent = puan;
        }else{
            document.querySelector("body").style.backgroundColor="#EB1D36"
            document.querySelector(".message").textContent = "Tekrar Dene :(";
            document.querySelector(".score").textContent = 0;
        }
    }
});
// Again Butonu
document.querySelector(".again").addEventListener("click",function(){
puan = 20;
gizliNumara = Math.trunc(Math.random()*20) +1;
document.querySelector(".score").textContent = puan;
document.querySelector(".message").textContent = "Start Guessing...";
document.querySelector(".guess").textContent = " ";
document.querySelector(".number").textContent = "?";
// Style
document.querySelector("body").style.backgroundColor= "#222";
document.querySelector(".number").style.width = "15rem";
})

// Başarıyla tamamlandı ^^