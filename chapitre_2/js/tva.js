var prixHt = prompt("Entrez un prix HT");
var prixTtc = Number(prixHt * 20 / 100) + Number(prixHt);
console.log(prixTtc);