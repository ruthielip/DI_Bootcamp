let listTasks = [];
let input = document.getElementsByTagName("input")[0];
let button = document.getElementsByTagName("button")[0];
let div = document.getElementsByClassName("listTasks")[0];

button.addEventListener("click", addTask);

function addTask(event){
	event.preventDefault();
	if(input.value.length !== 0){
    listTasks.push(input.value);
    let newItem = div.appendChild(document.createTextNode(input.value));
    input.value="";  
    
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    div.appendChild(checkbox)

    // let xButton = document.createElement("button");
    // let xButtonText = document.createTextNode("x");
    // xButton.appendChild(xButtonText);
    // div.appendChild(xButton);
    // xButton.classList.add("xbox");
  }
}
