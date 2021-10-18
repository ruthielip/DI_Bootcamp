// 1. Add a “light blue” background color and some padding to the <div>.

let divStyle = document.body.firstElementChild;
divStyle.style.backgroundColor = "lightblue";
divStyle.style.padding = "5px";

// 2.Do not display the first name (John) in the list.

let parent = document.getElementsByTagName("ul");
for (let ul of parent){
	let firstItem = ul.children[0];
	ul.removeChild(firstItem)
}


// 3.Add a border to the second name (Pete).

let border = document.getElementsByTagName('ul');
for (let ul of border) {
	ul.style.border = "1px solid black";
}

// 4. Change the font size of the whole body.

document.body.style.fontSize = "30px";




