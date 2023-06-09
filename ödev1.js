//node ödev1.js yaz calistir
//değişken tanımlamak
// değişken tipleri: string number boolean bigint undefined null symbol
const number=123;
const number2=456;
const number3=null
const str="ahmet";
const bool=true;
const bool2=false;
console.log(number*number2)
const degisken=undefined
console.log(degisken)
//eğer const ile tanımlarsanız daha sonra değiştiremezsiniz.
let degisken2;
var degisken3;
console.log(degisken2)
degisken2="a"
console.log(degisken2)
console.log(number3)
degisken3="ali"
console.log(degisken3)

/* objeler */
//Objeler(komplike tipler),
const myObj={
    id:1,
    baslik:"savas sanati",
    tanim:"sun tzu nun yazdigi kitap"
}
const myObj2={
    id:2,
    baslik:"zindan adasi",
    tanim:"en sevdigim film"
}
//Şu şekilde ulaşabiliriz.
console.log(myObj.tanim)
console.log(myObj2.tanim)
//Fonksiyonlar,sınıflar,listeler  ayni zamanda objedir.
function myFunction(){
    /** code */
}
class myClass{
    /*code  */
}