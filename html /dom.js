'use strict'

//DOM - Document object model 

function cambiaColor(color){
	caja.style.background=color;
}

//var caja =document.getElementById("caja");
var caja = document.querySelector("#caja"); // #id .class 

caja.innerHTML = "¡Texto en la caja desde JS!"; //Cambia el contenido de caja
caja.style.background = "pink"; 
caja.style.padding = "20px"; 
caja.style.color = "red"; 
caja.class = "";
caja.className = "";


//Conseguir elementos por sus etiquetas 
var todosLosDivs = document.getElementsByTagName('div');


todosLosDivs.forEach((valor,indice) => {

/*var contenidoEnTexto = todosLosDivs[1].textContent; 
contenidoEnTexto.innerHTML = "Otro texto cambiado"; 
*/

	var parrafo = document.createElement("p");
	var texto = document.createTextNode(valor);
	parrafo.appendChild(texto);
//console.log(todosLosDivs);

}); 


//Conseguir elementos por su clase css 




