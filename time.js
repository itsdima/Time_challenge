function Time(HOUR, MINUTE, PERIOD) {

	if (MINUTE > 30) {
		if (MINUTE == 45) {
			console.log("It's quarter to", HOUR + 1, PERIOD)
		}
		else {
		console.log("It's almost", HOUR, PERIOD);
		}
	}
	else if(MINUTE < 30){
		if (MINUTE == 15) {
			console.log("It's quarter after", HOUR, PERIOD)
		}
		else {
			console.log("It's just after", HOUR, PERIOD);
		}
	}
	else {
		console.log("It's half past", HOUR, PERIOD)
	}
}

Time(6, 05, 'PM');

