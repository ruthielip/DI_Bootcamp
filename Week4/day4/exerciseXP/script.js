// Exercise 1 : Location

// Analyze the code below. What will be the output?

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// Output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// // Exercise 2: Display Student Info

// 1. Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).

// 2. Destructure the parameter inside the function and return a string as the example seen below:

// displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
// output : 'Your full name is Elie Schoppik'`

function displayStudentInfo(studentObject){
	let {first, last} = studentObject;
	console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Lyov', last:'Myshkin'})

// Exercise 3: User & Id

// 1. Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// 2. Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const users = { user1: 18273, user2: 92833, user3: 90315 };
let usersArray = Object.entries(users);
console.log(usersArray)

let usersArrayMultiplied = usersArray.map((element)=> [element[0], element[1]*2])
console.log(usersArrayMultiplied)

// Exercise 4 : Person Class

// Analyze the code below. What will be the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member); //obect

// // Exercise 5 : Dog Class

// // Analyze the options below.

class Dog {
  constructor(name) {
    this.name = name;
  }
};

// // Which constructor will successfully extend the Dog class?

   // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// // Exercise 6 : Challenges

// // 1. Evaluate these (ie True or False)

[2] === [2] //false
{} === {} //false


// 2.What is the value of property “number” for each object.

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5}; 
object1.number = 4;

//object1 value is 4
//object2 value is 4
//object3 value is 4
//object4 value is 5

// 3. Create a class Animal with the attributes name, type and color

class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.type = type;
		this.color = color;
	}
}

// Create a class Mamal that extends from the Animal class. 
// It has a method called sound(). This method takes a parameter: 
// the sound the animal makes, and returns the details of the animal 
// (name, type and color) as well as the sound it makes.

class Mamal extends Animal{
	constructor(name, type, color, noise) {
		super(name, type, color);
		this.noise = noise;
	}
	sound() {
		console.log(`This is ${this.name} a ${this.color} ${this.type} that says ${this.noise}`)
	}

}

const animalOne = new Mamal('Fluffy', 'dog', 'white', 'woof')
animalOne.sound()

// 5. Create a cow object that accepts a name, a type and a color and calls 
// the sound method that moo’s her name, type and color.

const cow = new Mamal('Bessie', 'cow', 'black and white', 'moooo')
cow.sound();
// I dont really understand what to do for this one