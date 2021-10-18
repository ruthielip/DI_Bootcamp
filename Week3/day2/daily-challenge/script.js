let unorderedList = document.getElementsByTagName("ul"); 

let noun = document.getElementById("noun");
let adjective = document.getElementById("adjective");
let someonesName = document.getElementById("person");
let verb = document.getElementById("verb");
let place = document.getElementById("place");
let button = document.getElementById("lib-button");

function story(){
	let storyTeller = "This is information about "+ person.value + " who likes " + noun.value + "s.";
	storyTeller +=  " He's a very " + adjective.value + " kid. ";
	storyTeller += person.value + " likes to " + verb.value + " and he's never been to " + place.value + ".";
    let storyP = document.createElement("p");
    let newText = document.createTextNode(storyTeller);
    storyP.appendChild(newText);
    document.body.appendChild(storyP);
}


button.addEventListener("click", story)