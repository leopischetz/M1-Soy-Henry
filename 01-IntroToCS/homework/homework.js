'use strict';

function BinarioADecimal(num) {
   var n= num.split("").reverse();
   var resultado =0;
   for(var i= 0; i<n.length; i++){
      if(n[i]=== "1"){
         resultado += Math.pow(2,i);
      } else{
         resultado += 0;
      }
   }  
   return resultado;
}

function DecimalABinario(num) {
   var entero = num; 
   var result = ''; 

   while(entero >= 1) {
    result += entero % 2;

    array = Math.floor(entero / 2)

    }
    return result.split('').reverse().join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
