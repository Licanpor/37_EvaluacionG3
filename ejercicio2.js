/*inicio
Declaro los elementos que voy a utilizar:
var nombres, nombre1, nombre2, nombre3
 Le pido al usuario que ingrese tres nombres que se guardaran en nombre1, nombre2, nombre3 
 respectivamente:
var nombre1 = prompt("Ingresa un nombre");
var nombre2 = prompt("Ingresa otro nombre");
var nombre3 = prompt("Ingresa un tercer nombre");
Los nombres se guardaran en el arreglo nombres:
nombres = [nombre1, nombre2, nombre3];
Se mostraran en pantalla los nombres que ingreso.
fin

*/


var nombres = [];
var nombre1 = prompt("Ingresa un nombre");
var nombre2 = prompt("Ingresa otro nombre");
var nombre3 = prompt("Ingresa un tercer nombre");
nombres = [nombre1, nombre2, nombre3];

document.write('Los nombres de ' + nombres + ' estan registrados.');

