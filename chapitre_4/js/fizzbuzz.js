for (var i = 1; i <= 100; i++){
	if ((i % 3 === 0) && (i % 5 === 0)){
		console.log("FizzBuzz");
	}
	else if (i % 3 === 0){
		console.log("Fizz");
	}
	else if (i % 5 === 0){
		console.log("Buzz");
	}
	else {
		console.log(i);
	}
}

for (var number = 1; number <= 100; number++){
	var text = "";
	if ((number % 3 === 0) && (number % 5 === 0)){
		text = "FizzBuzz";
	}
	if (number % 3 === 0){
		text = "Fizz";
	}
	if (number % 5 === 0){
		text = "Buzz";
	}
	else (text === ""){
		text = number;
    }
    console.log(text);
}

