var mois = prompt("Entrez un mois");
if ((mois === "Janvier") || (mois === "Mars") || (mois === "Mai") || (mois === "Juillet") || (mois === "Août") || (mois === "Octobre") || (mois === "Décembre")) {
	console.log("Ce mois_ci, il y aura" + " " + 31 + " " + "jours");
} else if ((mois === "Avril") || (mois === "Juin") || (mois === "Septembre") || (mois === "Novembre")) {
	console.log("Ce mois_ci, il y aura" + " " + 30 + " " + "jours");
} else if (mois === "Février") {
	console.log("Ce mois_ci, il y aura" + " " + 28 + " " + "jours");
} 
else {
	console.log("Je n'ai pas compris");
}
