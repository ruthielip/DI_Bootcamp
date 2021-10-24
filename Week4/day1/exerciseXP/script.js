// Exercise 1 : Scope
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    console.log(a);
}
// answer: 3

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
// answer: 5

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    console.log(a);
}
// answer: not defined

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
// answer: test

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
// answer: 5

// Exercise 2 : Ternary Operator
function winBattle(){
    return true;
}

let experiencePoints = function (){winBattle() ? 10 : 1}
experiencePoints()

// Exercise 3 : Colors
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((element, index) => console.log(`${index+1}# choice is ${element}`));

// Exercise 4 : Colors #2
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

let [th, st, nd, rd] = ordinal;
color.forEach((element, index) => {
    if (index === 0){
        console.log(`${(index+1)+(st)} choice is ${element}`)
    } else if (index === 1){
        console.log(`${(index+1)+(nd)} choice is ${element}`)
    } else if (index === 2){
        console.log(`${(index+1)+(rd)} choice is ${element}`)
    } else {
        console.log(`${(index+1)+(th)} choice is ${element}`)
    }
})

// Exercise 5 : Is It A String ?
let isString = (value) => {typeof value === "string" ? console.log(true) : console.log(false)};
isString("hello") 
isString([1, 2, 4, 0])

// Exercise 6 : Bank Details
let bankAmount = 10000;
let vat = 1.17;
let details = ["+1050", "-200", "+300", "+500", "-1000"];
details.forEach((element, index) => details[index] = details[index]*vat);


details.forEach((element) => bankAmount+=element)
