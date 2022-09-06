const validator = {
  isValid:function(cCardNumber){ // "2978"
    let miArray= cCardNumber.split('');//Convertido a Array  ["2","9","7","8"]
    let inverso= miArray.reverse();//Inverti el array ["8","9","7","2"]
    let arrayNum=inverso.map(Number);//Nuevo array convertido a number [8,9,7,2]
    let unidad=0;  
    let impares=0;
    let menores=0;
    let mayores=0;
    let suma=0;
    for(let i=0; i<arrayNum.length;i++){
      if(i%2!=0){     // 0=8/2  1=9/2  2=7/2  3=2/2
        unidad=arrayNum[i];//[9 2]
        unidad*=2; //9*2=18  2*2=4
        if(unidad>9){ 
          unidad= 1 + (unidad % 10);//18(8)  1+8=9
          mayores+=unidad; //->9
        }else{
          menores+=unidad;//2
        }                                                  
      }else{
        impares+=arrayNum[i]; // 8 7->15
      }
    }
    suma=impares+menores+mayores;
    //console.log(suma);
    if(suma%10===0){
      return true;
    }else{
      return false 
    }
  }, 
  maskify:function(cCardNumber){
    return cCardNumber.split('').map((letra,i) => i<cCardNumber.length - 4 ? '#':letra).join('');
  }
};
// let mascara="#";
    // let enmascarar= cCardNumber.slice(0,-4).replace(/./g,mascara)+(cCardNumber).slice(-4);
    //console.log(enmascarar);
 
//console.log(validator.maskify(cCardNumber));

//console.log(validator.isValid());
export default validator;
