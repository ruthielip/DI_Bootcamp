// 1. Using DOM methods, remove the last paragraph in
// the <article> tag from the DOM.

let parent = document.body.firstElementChild;
let lastP = document.body.firstElementChild.lastElementChild
parent.removeChild(lastP);

// 2. Add an event listener which will change the background
// color of the h2 tag from the DOM when clicked on.

let headerTwo = document.getElementsByTagName("h2")[0];
headerTwo.addEventListener("click", function(){
	document.body.style.backgroundColor = "pink";
})

// 3.Set the font size of the h1 tag to a random pixel size 
// between 0 to 100.

// headerOne = document.body.firstElementChild.firstElementChild;
// headerOne.style.fontSize = "(Math.random() * 100)";

// 4.Add an event listener which will hide the h3 when it’s
// clicked on (use the display property).

let headerThree = document.getElementsByTagName("h3")[0];
headerThree.addEventListener("click", function(){
	headerThree.style.display = "none";
})

// 5.Add a <button> to the HTML file, that when clicked on, 
// should make the text of all the paragraphs, bold.

let button = document.createElement("button");
let newText = document.createTextNode("Button");
button.appendChild(newText);
document.body.appendChild(button);


function bold(){
	para = document.querySelectorAll("p");
	for(let paragraph = 0; paragraph < para.length; paragraph++){
		para[paragraph].style.fontWeight = "bold";
	}
}

button.addEventListener("click", bold);

// 6.When the “Submit” button of the form is clicked:
// get the values of the input tags
// make sure that they are not empty,
// then append them to a HTML table, in the div, below the form.

let inputFirst = document.getElementById("fname");
let inputLast = document.getElementById("lname");

function tableContent(event){
	event.preventDefault()
	let table = document.createElement("tr");
	let tableText = document.createTextNode(inputFirst.value);
	table.appendChild(tableText)
	document.body.appendChild(table);
}

function tableContentTwo(event){
	event.preventDefault()
	let table = document.createElement("tr");
	let tableText = document.createTextNode(inputLast.value);
	table.appendChild(tableText)
	document.body.appendChild(table);
}

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", tableContent);
submitButton.addEventListener("click", tableContentTwo);

// 7.When you hoover on the 2nd paragraph, it should fade out

let secondParagraph = document.getElementsByTagName("p")[1];
secondParagraph.classList.add("fade");

