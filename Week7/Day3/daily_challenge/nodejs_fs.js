const fs = require('fs');

fs.readFile('./RightLeft', (err, data)=>{
	if(err){
		console.log(err)
	} else {
		finalPosition(data);
		firstStepMinus(data);
	}
});

function finalPosition(data){
	const array = data.toString().split('');
	let position = 0;
	console.log(array)

	for(let i = 0; i< array.length; i++){
		if(array[i] == '>'){
			++position;
		} else {
			--position;
		}
	}
	console.log(`Total Steps: ${position}`);
}

function firstStepMinus(data){
	const array = data.toString().split('');
	let position = 0;
	let stepNumber = 0;

	for(let i = 0; i< array.length; i++){

		++stepNumber

		if(array[i] == '>'){
			++position;
		} else {
			--position;
		}

		if(position == -1){
			break;
		}
	}
    console.log(`First time in left side is in: ${stepNumber} steps`)
}