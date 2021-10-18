// 1.Create a function called getBold_items() that takes no parameter.
// This function should collect all the bold items inside the paragraph.

let boldText;
getBold_items()

function getBold_items(){
    boldText = document.querySelectorAll("strong");
}
// 2.Create a function called highlight() that changes the color of all the bold text to blue.

function highlight(){
	for(let i=0; i<boldText.length; i++){
		boldText[i].style.color = "blue";
	}
}

// 3.Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal(){
	for(let i=0; i<boldText.length; i++){
		boldText[i].style.color = "black";
	}
}

// 4.Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), 
// and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph).

let onMouse = document.body.firstElementChild;
onMouse.addEventListener("mouseover", highlight)
onMouse.addEventListener("mouseout", return_normal)