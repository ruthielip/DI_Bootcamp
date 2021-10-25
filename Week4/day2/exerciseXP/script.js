// Exercise 1 : Function With Two Parameters
// Create a one line function that receives two numbers as parameters and returns the sum.

let sum = (one, two) => one + two;

// Exercise 2 : Closure
// Analyse the code below, and before executing it, predict the outcome of the last line.

const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3); //answer: 13
