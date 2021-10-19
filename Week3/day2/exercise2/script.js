// 1.Display the value of the selected option.

let optionTwo = document.getElementsByTagName("option")[1];
optionTwoValue = optionTwo.value;
console.log(optionTwoValue)

// 2. Add an additional option to the select tag:
// <option value="classic">Classic</option>

let newOption = document.createElement("option");
let newNext = document.createTextNode("Classic");
newOption.appendChild(newNext);
document.body.firstElementChild.appendChild(newOption);
newOption.value = "classic";

// The newly added option should be selected by default.

document.body.firstElementChild[2].selected = "selected";
