let redBox = document.getElementById("animate");
let yellowBox = document.getElementById("container");

function moveBox(){
	let position = 0;
	let setInter = setInterval(function(){
		if(position === 350) {
			clearInterval(setInter);
		} else {
			position++;
			redBox.style.left = position + "px";
		}
	}, 3);
}

let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", moveBox)