let paragraph = document.createElement("p");
let newText = document.createTextNode("Letters Only!");
paragraph.appendChild(newText);
document.body.appendChild(paragraph)

let input = document.createElement("input");
let inputText = document.createTextNode("");
input.appendChild(inputText);
document.body.appendChild(input);
input.setAttribute("type", "text");

function lettersOnly(event){

	let key = event.keyCode;
	
    if((key >= 65 && key <= 90) || key == 8){

    } else { 
        input.disabled = true;
    }
}

input.addEventListener("keydown", lettersOnly)