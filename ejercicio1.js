'use strict'

alert("ejercicio 1");


//programa que pida 2 numeros y que nos digan cual es el mayor y el menor y si son iguales si los numeros no son un numero o no son iguales no lo vuelvas a pedir



var my_answer = parseInt(prompt("ingresa un numero " , 0));

var my_answer2 =parseInt(prompt("ingresa otro numero" , 0));

while(my_answer<0 || my_answer2<0  || isNaN(my_answer) || isNaN(my_answer2) ){
   my_answer = parseInt(prompt("ingresa un numero " , 0));
   my_answer2 =parseInt(prompt("ingresa otro numero" , 0));
   
}

  


if(my_answer > my_answer2){
	alert("el numero mayor es" +  ' ' + my_answer);
	alert("el numero menor es" + ' '  + my_answer2);
}else if (my_answer2 > my_answer){
	alert("el numero mayor es " + ' ' + my_answer2);
	alert("el numero menor es " + ' ' +  my_answer)
}else if(my_answer == my_answer2){
	alert( "los numeros son iguales ");
}else {
	alert("introduce numero valido");
}

console.log(typeof my_answer);

console.log(my_answer);
console.log(my_answer2);
