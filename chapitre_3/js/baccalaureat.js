var moyenne = prompt("Entre ta moyenne au bac");
if (moyenne < 10) {
	console.log("Tu es recalé");
} else if (moyenne > 12 && moyenne <= 20) {
	console.log("Tu es reçu avec mention");
} else if (moyenne > 10 && moyenne < 12) {
	console.log("Tu es reçu");
}
else {
	console.log("Je n'ai pas compris ta réponse")
}

