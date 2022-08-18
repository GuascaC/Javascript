'use strict'
//Realizar un programa que cuente la cantidad de números positivos, negativos y 0

let cannum=0;
let canpos=0;
let canneg=0;
let cancer=0;
let num=0;
cannum=prompt("Introduzca la cantidad");
for(let i=0;i<cannum; i++){
    num=prompt("Introduzca un número");
    if (num == 0){
     cancer =++1 }
    else{
        if (num > 0){
         canpos =++1 }
        else{
         canneg =++1 }
    }
}
console.log("Positivos:"+canpos);
alert("Positivos:"+canpos);
console.log("Negativos:"+canneg);
alert("Negativos:"+canneg);
console.log("Ceros:"+cancer);
alert("Ceros:"+cancer);
