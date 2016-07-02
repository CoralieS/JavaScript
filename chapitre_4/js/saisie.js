// on initialise la valeur de la saisie à zéro
var saisie = 0;

// on crée une boucle while, qui dit que 
// TANT QUE la valeur saisie est inférieure à 50 ou supérieure à 100, le message "votre...." s'affiche 
while ((saisie < 50) || (saisie > 100)){
	saisie = Number(prompt("Votre nombre doit être compris entre 50 et 100"));
}
