// On initialise le jeu avec la question
var jeu = prompt("Voulez-vous jouer au ni oui ni non?");

// TANT QUE la réponse est différente de oui et de non, on pose la question
while((jeu !== "oui") && (jeu !== "non")){
	console.log(prompt("Voulez-vous jouer au ni oui ni non?"));
}

// Lorsque l'on a tapé oui ou non, on affiche "vous avez perdu"
console.log("Vous avez perdu!");