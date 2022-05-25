import validator from './validator.js';

console.log(validator.isValid());
//Ver ventanas
let btn_sgt=document.getElementById("sgt");
btn_sgt.addEventListener("click", ir);
function ir(){
    let vista1=document.getElementById("ventana1");
    vista1.style.display="none";
    let vista2=document.getElementById("ventana2");
    vista2.style.display="block";
}
//Obtener el valor
function obtenerNumero(){
    let num=document.getElementById("tarjeta").value;
    let miArray= new Array(num);
    for(let i=num.length-1;i>=0;i--){
        console.log(numeros[i])
    }
}
console.log(obtenerNumero); 