// Exercise 1 : Analyzing

// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
// answer: result = ["bread", "carrot", "potato", "chicken", "apple", "orange"];
console.log(result);

// ------2------
const country = "USA";
console.log([...country]);
// answer: ["U", "S", "A"]

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// answer:[undefined, undefined]; 


// Exercise 2 : Employees

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1. Using the map() method, say hello to the users using only their firstname
// (ie. “Hello Bradley”, “Hello Chloe” ect…)        

let helloUsers = users.map(element => "Hello " + element.firstName);

// 2.Using the filter() method, congratulate only the Full Stack Residents.

let fullStackResidents = users.filter(element => element["role"].includes('Full Stack Resident'));
let congratulate = fullStackResidents.map(element => "Congratulations " + element.firstName);

// Exercise 3 : Star Wars

// Using this array let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// 1. Use the reduce() method to combine all of these into a single string.

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let sentence = epic.reduce((acc, val)=> acc + val +" ")

// Exercise 4 : Employees #2

let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

// Use the filter() method to congratulate the students that passed the course.

let passed = student.filter(element => element.isPassed === true)
let congratulatePassed = passed.map(element => "Congratulations " + element.name)
console.log(congratulatePassed)