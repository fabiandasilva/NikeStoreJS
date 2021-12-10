let pedirNumero = Number(prompt("Escribe un numero del 1 al 1000"));

if (pedirNumero >= 1 && pedirNumero <= 1000) {
	alert("Tu numero esta dentro del rango 😄😄😄");
}

else if(pedirNumero < 1){
	alert("Uff ingresaste un numero menor a 1, proba de nuevo 🤔🤔🤔");	

}
else if(pedirNumero > 1000){
	alert("Uff te pasaste, proba de nuevo 🤔🤔🤔");

}
else {
	alert("Ingresaste algo que no es un numero 🙅‍♂️🙅‍♂️🙅‍♂️");

}