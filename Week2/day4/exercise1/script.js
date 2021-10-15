// Exercise 1 : Information

// Part I

function infoAboutMe() {
	console.log("My name is Ruthie, I'm 25 and I enjoy reading, drawing and playing the piano.")
}
 infoAboutMe()

// Part II

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName}, you are ${personAge} years old and your favorite color is ${personFavoriteColor}.`)
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

// Part III

function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies) {
    console.log(`Your name is ${personName}, you are ${personAge} years old and your favorite color is ${personFavoriteColor}.`)
    for (let i in personHobbies) {
    	console.log(personHobbies[i])
    }
}

infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])


// Exercise 2 : Keyless Car

let age = parseFloat(prompt("How old are you?"))

function checkDriverAge(age) {
    if (age < 18) {
    	alert(`Sorry, you are too young to drive this car. Powering off`)
    } else if (age > 18) {
    	alert(`You are old enough to drive, Powering On. Enjoy the ride!`)
    } else {
    	alert(`Congratulations on your first year of driving. Enjoy the ride!`)
    }
}

checkDriverAge(25)

// Exercise 3: Odd Or Even

function checkNumber() {
	
   for (let i = 1; i <= 100; i++)
   	if (i % 2 === 0) {
   		console.log(`The number ${i} is even`)
   	} else {
   		console.log(`The number ${i} is odd`)
   	}
}

checkNumber()

// Exercise 4: Find The Numbers Divisible By 23

function isDivisible() {
	 for (let i = 0; i < 500; i++)
	 	if (i % 23 === 0) {
	 		console.log(i)
	 	}
}

isDivisible()

// Exercise 5 : Amazon Shopping

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket() {
   let item = prompt(`Item here`)
   for (let i in amazonBasket) {
      if (Object.keys(amazonBasket).indexOf(item) > -1) {
      	console.log(`${item} is in basket`)
      }
      break;
   }
}

checkBasket()


// Exercise 8 : Tips

let billAmount = parseFloat(prompt("How much is the bill?"));

function tipCalculator(billAmount) {

	let calc;

	if (billAmount < 50) {

		 calc = billAmount/20;

	} else if (billAmount > 200) {

		 calc = billAmount/10;

	} else {

		 calc = billAmount/15;

	}
	return calc;
}

tipCalculator(billAmount)

let sum = billAmount + tipCalculator(billAmount);

console.log(sum)

// Exercise 9 : Vacations Costs

let numberNights = parseFloat(prompt(`How many nights would you like to stay?`));

function hotelCost() {

	let hotel;

	if (numberNights === NaN) {
		parseFloat(prompt(`How many nights would you like to stay?`))
	} else {
		hotel = numberNights*140;
	}
    return hotel;
}

hotelCost()

let destination = parseFloat(prompt("Where are you going?"));

function planeRideCost() {

    let plane;

    if (destination ==="London") {
    	plane = 183; 
    } else if (destination === "Paris") {
    	plane = 220; 
    } else {
    	plane = 300; 
    }
    return plane;
}

planeRideCost()

let daysCarRent = parseFloat(prompt("How many days would you like to rent the car?"));    

function rentalCarCost() {

	let car;

    if (daysCarRent < 10) {
    	car = daysCarRent*40;
    } else {
    	let discount = (daysCarRent*40)*0.05;
    	car = daysCarRent-discount;
    }
    return car;
}

rentalCarCost()

function totalVacationCost(hotel, plane, car) {
   let total = hotel + plane + car;
   console.log(total)
}

totalVacationCost(hotelCost(), planeRideCost(), rentalCarCost())