'use strict'


alert("ejercicio 4");

var numero1 = parseInt (prompt("introduce el primer numero" , 0));

var numero2 = parseInt(prompt("introduce el segundo numero" , 0));


while(numero1<numero2){
	numero1++;

	if(numero1%2 != 0){
		console.log("El" + numero1 + "es impar");
	}
}
