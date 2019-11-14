alert("Registro");



'use strict'


/*
 hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/


alert("ejercicio 3");
var numero1= parseInt( prompt("introduce el primer numero numero" , 0 ));

var numero2= parseInt( prompt("introduce el segundo numero" , 0 ));


while(numero1>=10000 || numero2>=10000){
  alert("tienes que introducir menor a 10000");

  var numero1= parseInt( prompt("introduce el primer numero numero" , 0 ));


  var numero2= parseInt( prompt("introduce el segundo numero" , 0 ));
}

document.write("<h2>De" + ' ' +  numero1 + ' ' +  "a" + ' ' + numero2 +  ' ' +"estan estos numeros:</h2>");
for(var i=numero1; i>=numero2; i--){
  document.write(i + "<br/>");
}

