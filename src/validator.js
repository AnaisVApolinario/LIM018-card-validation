const validator = {
  isValid:function(cCardNumber){
    let miArray= cCardNumber.split('');//Convertido a Array "980" ["9","8","0"]
    let inverso=miArray.reverse();//Inverti el array ["0","8","9"]
    let arrayNum=inverso.map(Number);//Nuevo array convertido a number [1,8,9]
    let unidad=0;
    let pares=0;
    let menores=0;
    let mayores=0;
    let suma=0;
    for(let i=0; i<arrayNum.length;i++){
      if(i%2!=0){     // 1/2 = 0,7 8/2 = 0
        unidad=arrayNum[i];//[1 8 9]
        unidad*=2; //6,4,12,4,14
        if(unidad>9){ 
          unidad= 1 + (unidad % 10);//12(3)y 14(5) 12/10 1 +2
          mayores+=unidad; //->8
        }else{
          menores+=unidad;//6 4 4 ->14
        }                                                  
      }else{
        pares+=arrayNum[i]; // 1 2 6 3 4 ->16
      }
    }
    suma=pares+menores+mayores;
    //console.log(suma);
    if(suma%10===0){
      return true;
    }else{
      return false 
    }
  }, 
  maskify:function(cCardNumber){
    // let mascara="#";
    // let enmascarar= cCardNumber.slice(0,-4).replace(/./g,mascara)+(cCardNumber).slice(-4);
    //console.log(enmascarar);
    return cCardNumber.split('').map((letra,i) => i<cCardNumber.length - 4 ? '#':letra).join('');
  }
};
 
//console.log(validator.maskify(cCardNumber));

//console.log(validator.isValid());
export default validator;
