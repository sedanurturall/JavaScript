/*
?SORULAR
1-Türkçe 40  -4 puan...
2-Matematik 40
3-Sosyal Bilimler 20
4-Fen Bilimleri 20

...>100 puanı ÖSYM veriyor 
...>Okul puanı max 60 veriyor 

 */
let turkceDogru ,turkceYanlis=0;
let matematikDogru , matematikYanlis=0;
let sosyalDogru , sosyalYanlis =0;
let fenDogru , fenYanlis=0;

let yeniSatir="\r\n";
let mesaj="TYT puan hesaaplamasi uygulamasina hoşgeldiniz!"+yeniSatir
    +"1-Puan hesapla"+yeniSatir
    +"2-Çikis yap ";

    //alert(mesaj);

    let secim =prompt(mesaj);

    switch(secim){
        case"1":
            turkceDogru=Number(prompt("Türkçe dogru sayisi"));
            turkceYanlis=Number(prompt("Türçe yanliş sayisi"));

            matematikDogru=Number(prompt("Matematik dogru sayisi"));
            matematikYanlis=Number(prompt("Matematik  yanliş sayisi"));

            sosyalDogru=Number(prompt("Sosyal dogru sayisi"));
            sosyalYanlis=Number(prompt("Sosyal  yanliş sayisi"));

            fenDogru=Number(prompt("Fen dogru sayisi"));
            fenYanlis =Number(prompt("Fen yanliş sayisi"));

            let okulPuani=Number(prompt("Okul puani"));

           //30  8/4=2 yanlış
           let dogruSayisi=turkceDogru+matematikDogru+sosyalDogru+fenDogru;
           let yanlişSayisi=turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis;
           let kalanDogru=dogruSayisi-(yanlişSayisi/4);
           puan= (kalanDogru*4)+100+okulPuani;
           alert("TYT Puaniniz:" +puan);
            break;
        
        case"2":
            alert("Uygulamadan çikiş yapildi...");
            break;
         
        default:
            alert("Lütfen geçerli aralikta giriniz!");
        break;
    }