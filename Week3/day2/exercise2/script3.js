// 1.Create an empty array. For example: let shoppingList=[].

let shoppingList= [];

// 2.Create a form containing : a text input field and an 
// “AddItem” button. Add this form to the DOM.

let form = document.createElement("form");
let formText = document.createTextNode("");
form.appendChild(formText);
let div = document.getElementById("root");
div.appendChild(form);

let input = document.createElement("input");
let inputText = document.createTextNode("");
input.appendChild(inputText);
form.appendChild(input);

let button = document.createElement("button");
let buttonText = document.createTextNode("Add Item");
button.appendChild(buttonText);
form.appendChild(button);

// 3.Type what you need to buy in the text input field, 
// then add the new item to the array as soon as you click
// on the “AddItem” button (Hint: create a function named addItem()).

input.setAttribute("type", "text");
input.setAttribute("class", "list-item");

// let para = document.createElement("p");
// let paraText = document.createTextNode("");
// para.appendChild(paraText);
// form.appendChild(para);

function addItem(e){
  e.preventDefault()
  let inputValue = document.getElementsByClassName("list-item")[0].value;
  shoppingList.push(inputValue);
  console.log(shoppingList)
}

button.addEventListener("click", addItem)
console.log(shoppingList)

// 4. Add a “ClearAll” button to the DOM, that when clicked on,
// should call the clearAll() function

let clearAllButton = document.createElement("button");
let clearAllText = document.createTextNode("Clear All");
clearAllButton.appendChild(clearAllText);
document.body.appendChild(clearAllButton);

// 5. Create a function named clearAll() that should
// clear out all the items in the shopping list.

function clearAll(){
	shoppingList= [];
	console.log(shoppingList)
}

clearAllButton.addEventListener("click", clearAll)