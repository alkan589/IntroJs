const str="MERHABA";

console.log(str.toLocaleLowerCase())
console.log(str.includes("ER"));//true
console.log(str.concat(" DÜNYA"))//birlestirme
console.log(str.endsWith("ba".toLocaleUpperCase()))//true
const newStr=str.split("R")//Dizi döner ödev4.js'e bak.
console.log(newStr)
console.log(str.charAt(1))
console.log(str.length)

const num=10;

const str2=num.toString()
console.log(typeof(str2))

