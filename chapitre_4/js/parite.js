var instruction = prompt("Entrez le nombre initial");
for (var i = 0; i <=5; i++){
	if (i % 2 === 0){
		console.log(i + ' ' + "est pair");
	}
	else {
		console.log(i + ' ' + "est impair");
	}
}

var consigne = prompt("Entrez le nombre initial");
var nb = 0;
while (nb <= 5){
	if (nb % 2 === 0){
		console.log (nb + ' ' + "est pair");
	}
	else {
		console.log (nb + ' ' + "est impair");
	}
	nb ++;
}