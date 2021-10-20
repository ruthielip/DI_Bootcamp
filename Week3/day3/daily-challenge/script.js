
let input = document.createElement("input");
let inputText = document.createTextNode("");
input.appendChild(inputText);
document.body.appendChild(input);
input.setAttribute("type", "text");

function lettersOnly(event){

	let key = event.keyCode;
	
    if((key >= 65 && key <= 90) || key == 8){

    } else { 
        event.preventDefault();
    }
}

input.addEventListener("keydown", lettersOnly)