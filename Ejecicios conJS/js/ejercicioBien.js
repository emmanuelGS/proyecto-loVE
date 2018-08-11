'use strict'

/*
Programa que pida dos números y diga cual es el mayor, el menor y si son iguales
Si no son números o son menores a cero nos lo vuelvan a pedir 
*/

var numero= parseInt(prompt("Ingresa un numero", 0));
var numero2= parseInt(prompt("Ingresa otro numero", 0));

while (numero< 0 || numero2 < 0 || isNaN(numero) || isNaN(numero2)){
	 numero= parseInt(prompt("Ingresa un numero", 0));
	 numero2= parseInt(prompt("Ingresa otro numero", 0));
}

if(numero == numero2) {
	alert("Los numeros son iguales");
}else if(numero > numero2){
	document.write("El numero " + numero + " es mayor");
	//alert("El numero " + numero + " es mayor");
}else if(numero2 > numero){
	alert("El numero " + numero2 + " es mayor"); 
}else{
	alert("introduce numeros correctos")
	document.write("hola mi amor " + numero);
}

