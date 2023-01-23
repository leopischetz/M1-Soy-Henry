'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, 
    según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, 
    hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio
   homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null;
}

BinarySearchTree.prototype.insert= function(valor) {
   if(this.value <= valor){
      if(!this.right){
         this.right = new BinarySearchTree(valor);
      } else {
         this.right.insert(valor);
      }
   } else {
      if(!this.left){
         this.left = new BinarySearchTree(valor);
      } else {
         this.left.insert(valor);
      }
   }
};

BinarySearchTree.prototype.contains= function(val) {
   if(this.value === val){
      return true;
   } else if((this.value < val) && this.right){
       return this.right.contains(val);
   } else if((this.value > val) && this.left){
      return this.left.contains(val);
   } else {
      return false;
   }
};

BinarySearchTree.prototype.depthFirstForEach= function(cb, order) {
   if(order == "post-order"){
      if(this.left){
         this.left.depthFirstForEach(cb,order);
      };
      if(this.right){
         this.right.depthFirstForEach(cb,order);
      };
      cb(this.value);  

   } else if(order == "pre-order"){
      cb(this.value);
      if(this.left){
         this.left.depthFirstForEach(cb,order);
      }
      if(this.right){
         this.right.depthFirstForEach(cb,order);
      }     

   } else{
      if(this.left){
         this.left.depthFirstForEach(cb,order);
      }
      cb(this.value);

      if(this.right){
         this.right.depthFirstForEach(cb,order);
      }       
   };
};

BinarySearchTree.prototype.breadthFirstForEach= function(cb, cola = []) {
   
   cb(this.value);
   if(this.left) cola.push(this.left);
   if(this.right) cola.push(this.right);   

   if(cola.length >= 1) {
      cola.shift().breadthFirstForEach(cb, cola);
   };
};
   
  

BinarySearchTree.prototype.size= function() {
   let cantidad = 1;
   if(this.left) cantidad += this.left.size();
   if(this.right) cantidad += this.right.size();
   return cantidad;
};




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
