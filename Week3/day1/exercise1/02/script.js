// Exercise 2 : Users

// 1.In the HTML above change the name “Pete” to “Richard”.

let newName = document.getElementsByClassName("list")[0].lastElementChild;
newName.textContent = "Richard";

// 2.Change each first name of the two <ul>'s to your name.

let firstName = document.getElementsByTagName("ul");
for (let ul of firstName) {
	ul.children[0].textContent = "Ruthie";
}

// 3.At the end of each <ul> add a <li> that says “Hey students”.

let listParent = document.getElementsByTagName("ul");

let students = document.getElementsByTagName("ul");
for (let ul of students) {
	let newItemList = document.createElement("li");
    let newText = document.createTextNode("Hey students");
    newItemList.appendChild(newText);
    ul.appendChild(newItemList);
}

// 4. 

let sarah = document.getElementsByClassName("second") 
for(let li of sarah) {
   deleteItem = li.children[1];
   li.removeChild(deleteItem);
}




