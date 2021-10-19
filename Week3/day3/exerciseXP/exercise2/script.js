let smallBox = document.getElementById("small-box");
let bigBox = document.getElementById("big-box");

smallBox.addEventListener("dragstart", startDrag)
bigBox.addEventListener("dragover", dragOver)
bigBox.addEventListener("drop", drop)

function startDrag(event){
    event.target.classList.add("startDrag");
    event.dataTransfer.setData("text/plain", event.target.id)
}

function dragOver(event){
	event.preventDefault();
}

function drop(event){
	event.preventDefault();
	let dropElement = event.dataTransfer.getData("text/plain");
	let elementNode = document.getElementById(dropElement);
	event.target.appendChild(elementNode);
}