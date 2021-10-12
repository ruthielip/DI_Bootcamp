// Exercise 1 : Your Favorite Colors

let colors = ["blue", "purple", "pink", "green"];
let number = ["st", "nd", "rd", "th"];

for (let i = 0; i < colors.length; i++) {
	console.log(`my ${(i+1)+number[i]} choice is ${colors[i]}`)
}

// Exercise 2 : List Of People

let people = ["Greg", "Mary", "Devon", "James"];
// 1.Write code to remove “Greg” from the people array.
people.shift();
// 2.Write code to replace “James” to “Jason”.
people.splice(2, 1, "Jason");
// 3.Write code to add your name to the end of the people array.
people.push("Ruthie");
// 4.Using a loop, iterate through the people array and console.log each person.
for (let i in people) {
    console.log(people[i])
}
// 5.Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
for (let i = 0; i <= 2; i++) {
	console.log(people[i])
}
// 6.Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
let newPeople = people.slice(1, 3);
// 7.Write code that console.logs Mary’s index. 
console.log(people.indexOf("Mary"))
// 8.Write code that gives the indexOf “Foo” (this should return -1).
console.log(people.indexOf("Foo"))
// 9.Create a variable called last which value is the last element of the array.
let last = people[people.length - 1];

// Exercise 3 : Repeat The Question

let userNumber = prompt("Write a number");

while (userNumber<10){
	userNumber = prompt("Invalid number! Please insert a new number.");
	if(userNumber>10){
		console.log("Valid Number yay!")
	}
}

// Exercise 4 : Attendance

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}
let i = 0;
let userName = prompt("What is your name?");

 for (let key in guestList) {
 	
 	if (userName === key) {
 		console.log("Hi! I'm " + key + ", and I'm from " + guestList[key] +"." );
 		break;
 	} 
 	
 	if (i==4){
 		console.log("Hi! I'm a guest.")
 	}
 	i=i+1;
 }

// Exercise 5 : Family

// 1.Create an object called family with a few key value pairs.
 let family = {
 	father: "Red",
 	mother: "Kitty",
 	sister: "Laurie",
 	brother: "Eric"
 }
// 2.Console.log the keys. (using a for loop).
 for (let k in family) {
 	console.log(k)
 }
 // 3.Console.log the values. (using a for loop).
 for (let k in family) {
 	console.log(family[k])
 }

 // Exercise 6

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

for (let k in details) {
	console.log(k, details[k])
}

// Exercise 7 : Secret Group

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names = names.sort();

for (let i in names) 
{
  
  console.log(names[i][0])

}