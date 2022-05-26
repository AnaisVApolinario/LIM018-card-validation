import validator from './validator.js';
//Obtener el valor
// let btn_pagar=document.getElementById("pagar");
// btn_pagar.addEventListener("click",pago);
// function pago(){
//     let num=document.getElementById("tarjeta").value;
//     return num;
// }     
console.log(validator.isValid('4083952015263'));



//Boton continuar
let btn_sgt=document.getElementById("sgt");
btn_sgt.addEventListener("click", ir);
function ir(){
    let vista1=document.getElementById("ventana1");
    vista1.style.display="none";
    let vista2=document.getElementById("ventana2");
    vista2.style.display="block";
}