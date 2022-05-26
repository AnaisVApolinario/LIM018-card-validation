const validator = {
  isValid:function(cCardNumber){
    let miArray= cCardNumber.split('');//Convertido a Array
    let inverso=miArray.reverse();//Inverti el array
    let arrayNum=inverso.map(Number);//Nuevo array convertido a number
    let unidad=0;
    let impares=0;
    let menores=0;
    let mayores=0;
    let suma=0;
    for(let i=0; i<arrayNum.length;i++){
      if(i%2!=0){ 
        unidad=arrayNum[i];//[3 2 6 2 7]
        unidad*=2; //6,4,12,4,14
        if(unidad>9){ 
          unidad= 1 + (unidad % 10);//12(3)y 14(5) 
          mayores+=unidad; //->8
        }else{
          menores+=unidad;//6 4 4 ->14
        }                                                  
      }else{
        impares+=arrayNum[i]; // 1 2 6 3 4 ->16
      }
    }
    suma=impares+menores+mayores;
    console.log(suma);
    if(suma%10===0){
      return true;
    }else{
      return false 
    }
  }, 
  maskify:function(cCardNumber){
    // let mascara="#";
    // let enmascarar= cCardNumber.slice(0,-4).replace(/./g,mascara)+(cCardNumber).slice(-4);
    // console.log(enmascarar);
  }
  
};

//console.log(validator.isValid());
export default validator;
