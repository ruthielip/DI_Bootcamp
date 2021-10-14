
let userNumber;


function playTheGame ()
 {
 	let playGame = confirm("Would you like to play the game?")
 	if(playGame === false) {
 		alert("No problem, Goodbye")
 		return;
 	} else {
 		userNumber = parseFloat(prompt("Write a number from 1-10"))
 	}
    if (!/^\d+$/.test(userNumber)) {
 		alert("Sorry not a number, Goodbye.")
 	} else if (userNumber>10) {
 		alert("Sorry it’s not a good number, Goodbye.")
 	} else {
 		let computerNumber = (Math.random() * 11).toFixed(0);
 		test(userNumber, computerNumber)
 	}
 	return;
 }



function test(user, computer) {
   
for (let i=0; i<3; i++) {
	if (user > computer) {
		alert(`Your number is bigger then the computer’s, guess again`)
	    user = parseFloat(prompt("Write a number"))
		continue;
	} else if (user < computer) {
		alert(`Your number is smaller then the computer’s, guess again`)
		user = parseFloat(prompt("Write a number"))
		continue;
	} else {
		alert(`WINNER`)
		return;
	} 
}
  alert(`Out of chances`)
}

