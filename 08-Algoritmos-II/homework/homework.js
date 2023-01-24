'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
  
  let j =Math.floor(Math.random() * array.length);
  let pivote = array[j];
  let menores = [];
  let mayores = [];

  for(let i=0; i<array.length; i++){
    if(array[i] <= pivote && (i!=j)){
      menores.push(array[i]);
    } else if(array[i] > pivote && (i!=j)){
      mayores.push(array[i]);
    }
  }

  return quickSort(menores).concat(pivote, quickSort(mayores));
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //okey probemos ahora
  if(array.length == 1) return array;

  var i = Math.floor(array.length/2);
  let izq = array.slice(0,i);
  let der = array.slice(i);

  izq = mergeSort(izq);
  der = mergeSort(der);

  let resultado = [];

  while(izq.length && der.length){
    if(izq[0]>der[0]){
      resultado.push(der.shift());
    } else {
      resultado.push(izq.shift())
    }
  }

  return [...resultado, ... izq, ...der]
 
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
