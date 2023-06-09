//karar yapıları
//eğer koşul doğruysa uygulanır
if(!number) console.log("the value is not defined")
if(number<number2) console.log("number2 is greater than number")
if(bool) console.log("statement is true")
if(!bool2) console.log("statemnet is false")
if(bool || bool2) console.log("or operator")
//bu da alternatif yöntemdir.
if(bool){
    console.log("deneme")
}
if(bool2){
    console.log("deneme2")
}
if(str=="ahmet"){
    console.log("test")
}
else{
    console.log("test2")
}
//else bloğu sonlandırır
//Kullanmadıklarım yaygın olmayanlardır.
//Tüm operatörler && || > < => <= == 
//and or büyüktür küçüktür büyükeşit küçükeşit

//Komplike karar yapıları

const askerlik=false
const yas=25

if(askerlik && yas>18){
    console.log("ehliyet alabilirsin")
}
else{
    console.log("alamazsin")
}
