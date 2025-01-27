const validator = {
  isValid: function (creditCardNumber) { 
    // Convierte el número a un nuevo array de dígitos invertido
    const digits = creditCardNumber.split("").reverse().map(Number); 
  
    // Calcula la suma según el algoritmo de Luhn
    const totalSum = digits.reduce((sum, digit, index) => {
      if (index % 2 !== 0) {
        let doubled = digit * 2;
        return sum + (doubled > 9 ? doubled - 9 : doubled);
      }
      return sum + digit; 
    }, 0);

    // Es válido si la suma es divisible entre 10
    return totalSum % 10 === 0;

  },
  maskify: function (creditCardNumber) {
    // Enmascara todos los dígitos excepto los últimos cuatro
    return creditCardNumber
      .split("")
      .map((char, index) => (index < creditCardNumber.length - 4 ? "#" : char))
      .join("");
  },
};

export default validator;
