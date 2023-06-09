//Metodlar
//Parametrize edilmedi
function selamla(){
    console.log("merhaba")
}
selamla()
//Parametrize edildi
function selamla2(isim,yas){
    console.log(`ben ${isim},yasim ${yas}`)
}
selamla2("ahmet",28)

//Default parameter
function selamla3(yas,isim="ahmet"){

    console.log(`ben ${isim} yasim ${yas}`);
}
selamla3(28)
//method override
function selamla2(yas,isim,üniversite){
    console.log(`isim ${isim} yasım ${yas} üni:${üniversite}`)
}
selamla2(35,"ali","itü")
//Refresher
function search(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return true
        }
    }
    return false
}
var myArray=[1,2,3,4,42]
const target=42
if(search(myArray,target)){
    console.log(`yeah there is`)
}
else if(!search(myArray,target)){
    console.log("there is no such an element")
}
