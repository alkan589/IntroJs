//Diziler-1
//Dizilere daha sonra devam edeceğiz.
const liste=["abc","d",true,undefined,null,42]
console.log(liste[0])
console.log(liste[1])
console.log(liste[2])
console.log(liste[3])
console.log(liste[4])
console.log(liste[5])
//Döngüler
//While sınırsız döngü ,for ise biten döngüdür

//Senaryo1
const liste2=["ali","bayram","cemil","deniz","erhan"]
var liste3=[undefined,undefined]
for( i in liste2){
   console.log(liste2[i])
}   
for(i of liste3){
    console.log(i)
}
//Senaryo2
//Random sayı üret 0-100 arası
//FLOOR FONSKSİYONU SAYIYI YUVARLAR
console.log(Math.floor(Math.random()*100))
const dizi=[]
//AYNI İŞLEMİ 10 KERE YAPAR
for(i=0;i<10;i++){
    const rnd=Math.floor(Math.random()*100)
    dizi.push(rnd);
}

console.log(dizi)
//SENARYO 3
var dizi2 = ["a", "b", "c", "d"];
var sayi = 42;

for (var i = 0; i < 10; i++) {
  for (var j = 0; j < dizi2.length; j++) {
    dizi2[j] = sayi;
  }
}
console.log(dizi2);
//While senaryoları-1
//Sinirsiz string listesi
var sinirsiz_liste = [];
while (true) {
  //Kullanıcıdan string giriş alan kod
  var eleman = prompt("Listeye bir eleman ekleyin (Çıkmak için 'q' tuşuna basın):");
  //Eger giris q ise  
  if (eleman === 'q') {
    break;
  }

  sinirisiz_liste.push(eleman);
}

console.log("Girilen liste: " + sinirsiz_liste.join(", "));

//While döngüsü senaryoları-2
var toplam = 0;
var sayi;

while (sayi !== 0) {
  //Kullanıcıdan giriş alan kod prompt.
  //Tip dönüşümü
  sayi = parseInt(prompt("Bir sayı girin (0 girerek çıkabilirsiniz):"));

  if (sayi % 2 === 1) {
    toplam += sayi;
  }
}
//Sonuc
console.log("Tek sayıların toplamı: " + toplam);

//While döngüsü senaryoları-3
//Değişken tanımları
var tahmin = Math.floor(Math.random() * 100) + 1;
var dogruTahmin = false;
var denemeSayisi = 0;

while (!dogruTahmin) {
  //Yerel scope
  //parseInt prompt tan girilen sayiyi integere cevirir.(string->number)  
  var kullaniciTahmini = parseInt(prompt("1 ile 100 arasında bir sayı tahmin edin:"));
  //bu değer 1 artırılmış  
  denemeSayisi++;
  //kosullar kontrol ediliyor  
  if (kullaniciTahmini === tahmin) {
    //String birlestirme islemi var."${}" bu da aynı islemi yapar.
    console.log("Tebrikler, doğru tahmin! " + denemeSayisi + " denemede buldunuz.");
    //console.log(`Tebrikler, doğru tahmin! ${denemeSayisi} " denemede buldunuz.`)
    dogruTahmin = true;
  }//Üçüncü koşullar else if ile kontrol edilir.
   else if (kullaniciTahmini < tahmin) {
    console.log("Daha yüksek bir sayı girin.");
  } else {
    console.log("Daha düşük bir sayı girin.");
  }
}

    

