let buttonListener = document.getElementById("button");

buttonListener.addEventListener("click", function(){
	document.body.style.backgroundColor = "#d5ccff";
})

buttonListener.addEventListener("mouseover", function(){
	document.getElementById("title").style.fontSize = "50px";
})

buttonListener.addEventListener("dblclick", function(){
	document.getElementById("lyrics").style.fontStyle = "italic";
})

buttonListener.addEventListener("mouseleave", function(){
	document.getElementById("container").style.color = "#663eed";
})