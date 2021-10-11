// Exercise 1: Simple If/Else Statement


let x = 4;
let y = 7;

if (x > y) {
	console.log("x is the biggest number")
} else {
	console.log("y is the biggest number")
}


// Exercise 2: Chihuahua


// 1.Create a variable called newDog where it’s value is “Chihuahua”.
let newDog = "Chihuahua";
// 2.Check and display how many letters are in newDog.
console.log(newDog.length)
// 3.Display the newDog variable in uppercase and then in lowercase
// (no need to create new variables, just console.log twice).
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())
// 4.Check if the variable newDog is equal to “Chihuahua”
// -if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// -else, console.log ‘I dont care, I prefer cats’
if (newDog === "Chihuahua") {
	console.log("I love Chihuahuas, they are my favorite dog breed")
} else {
	console.log("I dont care, I prefer cats")
}


// Exercise 3: Even Or Odd


let userNumber = prompt("Write a number");
console.log(userNumber)

if ((userNumber & 1) == 0)  {
	console.log(userNumber, "is an even number")
} else {
	console.log(userNumber, "is an odd number")
}

// Exercise 4: Group Chat
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let usersLeft = users.length - 2;

if (users.length === 0) {
	console.log("No one is online")
} else if (users.length === 1) {
	console.log(users[0], "is online") 
} else if (users.length === 2) {
	console.log(users[0], "and", users[1], "are online")
} else {
	console.log(users[0], ",", users[1], "and", usersLeft, "more are online")
}