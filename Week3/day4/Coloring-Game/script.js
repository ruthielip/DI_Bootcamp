
let sideBar = document.getElementById("side-bar");

let colors = 
["#e34242",
"#ff6363", 
"#ffa463", 
"#ffd863", 
"#ffff63", 
"#c6ff63", 
"#70ff6b", 
"#63ff9c", 
"#63ffcb", 
"#63fffa", 
"#63c3ff", 
"#6385ff", 
"#7d63ff", 
"#c163ff", 
"#e263ff", 
"#ff63e2", 
"#ff6392", 
"#e34272",  
"gray", 
"white", 
"black"]


for(let i=0; i<7*3; i++){
	 let colorDiv = document.createElement("div");
	 sideBar.appendChild(colorDiv)
	 colorDiv.classList.add("colors")
	 for(j=0; j<colors.length; j++){
        colorDiv.addEventListener("click", getColor);
        colorDiv.style.backgroundColor = colors[i];
	 }
}

function getColor(event){
    myColor = event.target.style.backgroundColor;
}

let boxes = document.getElementById("boxes");

for(let i = 0; i < 60*24; i++){
    let boxDiv = document.createElement("div");
    boxDiv.classList.add("boxes");
    boxes.appendChild(boxDiv);
    boxDiv.addEventListener("click", setColor);
    boxDiv.addEventListener("mousedown", mouseDown);
    boxDiv.addEventListener("mouseover", mouseOver);
    boxDiv.addEventListener("mouseup", mouseUp);
 }

let isMouseDown;
let myColor;

function setColor(event){
	event.target.style.backgroundColor = myColor;
} 

function mouseDown(){
    isMouseDown = true;
}

function mouseOver(event){
    if(isMouseDown === true){
    	setColor(event)
    }
}

function mouseUp(){
    isMouseDown = false;
}

let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", clearColors)
clearBoxes = document.getElementsByClassName("boxes");

function clearColors(){
    for(let i=0; i<clearBoxes.length; i++){
        clearBoxes[i].style.backgroundColor = "white";
    }
}