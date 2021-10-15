
let userNumber = parseFloat(prompt("Write a number"));

let bottles;
let decreaseNumber = 0;
let loop = 0;

function beerSong (number) {

	while (number - decreaseNumber > 0) {
        loop ++;
        number -= decreaseNumber;
        decreaseNumber++;
        if (number == 1) {
        	bottles = "bottle";
        } else {
        	bottles = "bottles";
        }
         if (number < userNumber) {
          console.log(`${number} ${bottles} of beer on the wall`)
        }
          console.log(`${number} ${bottles} of beer on the wall`)
          console.log(`${number} ${bottles} of beer`)
        if (decreaseNumber == 1) {
        	console.log(`Take ${loop} down, pass it around`)
        } else {
            console.log(`Take ${loop} down, pass them around`)
        }      
  }
      console.log("No more bottles of beer on the wall.")
}

beerSong(userNumber)



