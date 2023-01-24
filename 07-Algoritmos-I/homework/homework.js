'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var newArray = [1];

  for(var i=2; i<=num; i++){
    if(num % i == 0){
    newArray.push(i);
    num /= i;
    i-=1;
     }
  }

  return newArray;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var aux = 0;

   for(var i=0; i<array.length-1; i++){
    for(var j=0; j<array.length; j++){
      if(array[j]>array[j+1]){
        aux = array[j];
        array[j]=array[j+1];
        array[j+1] = aux;
      }
    }
  }

  return array;
}
  


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let j, temporal;

  for(let i=1; i<array.length; i++){
    j=i;
    temporal=array[i];
    while(j>0 && array[j-1]>temporal){
      array[j]=array[j-1];
      j--;
    }
    array[j] = temporal;
  }

  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(var i=0; i<array.length; i++){
    let minimo = i;
    for(let j=i+1; j<array.length; j++){
      if(array[minimo]>array[j]){
        minimo = j;
      }
    }
    if(minimo!=i){
      let temporal = array[minimo];
      array[minimo] = array[i];
      array[i] = temporal;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
