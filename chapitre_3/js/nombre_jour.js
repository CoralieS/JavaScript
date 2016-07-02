var mois = Number(prompt("Entrez un mois"));
if ((mois === 01) || (mois === 03) || (mois === 05) || (mois === 07) || (mois === 08) || (mois ===10) || (mois === 12)) {
	console.log("Ce mois_ci, il y aura" + " " + 31 + " " + "jours");
} else if ((mois === 04) || (mois === 06) || (mois === 09) || (mois === 11)) {
	console.log("Ce mois_ci, il y aura" + " " + 30 + " " + "jours");
} else if (mois === 02) {
	console.log("Ce mois_ci, il y aura" + " " + 28 + " " + "jours");
} 
else {
	console.log("Je n'ai pas compris");
}
