var HOUR = 6; 
var MINUTE = 30; 
var PERIOD = 'PM'; 
if (MINUTE > 30) {
	if (MINUTE == 45) {
		console.log("It's quarter to", HOUR + 1)
	}
	else {
	console.log("It's almost", HOUR, PERIOD);
	}
}
else if(MINUTE < 30){
	if (MINUTE == 15) {
		console.log("It's quarter after", HOUR)
	}
	else {
		console.log("It's just after", HOUR, PERIOD);
	}
}
else {
	console.log("It's half past", HOUR)
}


