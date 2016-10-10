/*inicio

var jugador1;
var jugador2;
var i=1;

al jugador1: "elija una opcion :1=piedra, 2=papel, 3=tijera"
al jugador2: "elija una opcion :1=piedra, 2=papel, 3=tijera"

si i <= 3 compara las respuestas de los jugadores.
si papel = piedra, gana papel
si papel = tijera, gana tijera
si piedra = tijera, gana piedra
*/





 for (var i = 1; i <= 3; i++) {
 	var jugador1 = prompt("Jugador 1, Elija una opcion: 1=piedra, 2=papel, 3=tijera");
	jugador1 = Number(jugador1);
	var jugador2 = prompt("Jugador 2, Elija una opcion: 1=piedra, 2=papel, 3=tijera");
	jugador2 = Number(jugador2);
	jugar(jugador1, jugador2);

	
 }
	function jugar(jugador1, jugador2){
	if(jugador1 === jugador2){
		document.write("Empate");
	}
 	if((jugador1 === 2) && (jugador2 === 1)){
	 	document.write("Gana Papel ");
	 } 
	if((jugador1 === 1) && (jugador2 === 3)){
	 	document.write("Gana Piedra ");
	 }
	if((jugador1 === 3) && (jugador2 === 2)){
	 	document.write("Gana Tijera ");
	 }

 }


	// if((jugador1 === 2) && (jugador2 === 3)){
	//  	document.write("Gana Papel ");
	//  }
	// if((jugador1 === 1) && (jugador2 === 3)){
	//  	document.write("Gana Piedra ");
	//  }
	//  if((jugador1 === 1) && (jugador2 === 2)){
	//  	document.write("Gana Tijera ");
	//  }
	 	
	// i++
 // }while(i <= 3);


 



	