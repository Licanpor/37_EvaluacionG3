/*Definir una función que determine si la cadena de texto que se le pasa
como parámetro es un palíndromo, es decir, si se lee de la misma forma 
desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural"*/
var palabra = prompt("Ingrese su frase o palabra para verificar si es un palíndromo o no.");
isPalindromo(palabra);


function isPalindromo(palabra){
	var frase = palabra.replace(/\s/g,"");
	for(var i=0; i < frase.length; i++){
		var derecho = frase[i];
		var reves = frase[frase.length - (i + 1)];
		if (derecho !== reves){
			console.log(frase +", no es palíndromo");
			return false;
		}
	} console.log(frase + ", sí es palíndromo");
	return true;
}