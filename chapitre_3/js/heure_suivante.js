var heure = Number(prompt("Entrez l'heure"));
var minute = Number(prompt("Entrez les minutes"));
var seconde = Number(prompt("Entrez les secondes"));

if ((heure >= 0) && (heure <= 23) && (minute >= 0) && (minute <= 59) && (seconde >= 0) && (seconde <= 59)){
	seconde++;
	if (seconde === 60) {
	minute++;
	seconde = 0;
	 
		if (minute === 60) {
		minute = 0;
		heure++;
	
			if (heure === 24){
			heure = 0
			}
		}
	}
	console.log("Dans une seconde, il sera" + " " + heure + " " + "heures et" + " " + minute + " " + "minutes et" + " " + seconde + " " + "secondes")
}

else {
	console.log("Heure incorrecte");
}