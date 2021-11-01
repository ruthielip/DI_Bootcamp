
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
	event.preventDefault()

    let obj = {
		firstname: document.getElementById("firstname").value,
		lastname: document.getElementById("lastname").value
	}

	let paragraph = document.createElement("p");
	let text = document.createTextNode(JSON.stringify(obj));
	paragraph.appendChild(text);
	form.appendChild(paragraph)
});

