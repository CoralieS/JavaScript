// on initialise la valeur de départ qui PERMET de rentrer dans la boucle
var chiffre = 0;

// TANT QUE le chiffre saisi est inférieur à 2 ou supérieur à 9, on affiche le message (entre un chiffre entre 2 et 9)
while ((chiffre < 2) || (chiffre > 9)) {
	chiffre = Number(prompt("Entre un chiffre entre 2 et 9"));
}
// On annonce le titre de la table (en dehors du while et du for, car on n'a pas à boucler dessus. Un titre est un titre)
console.log( "Voici la table de" + chiffre + ":"); 

// POUR un chiffre entre 2 et 9, on affiche la table de multiplication correspondante en entrant "pour la VARIABLE i initialisée à 0"
for (var i = 1; i = 10; i++){
	console.log( chiffre + "x" + i + "=" + (chiffre*i));
}


