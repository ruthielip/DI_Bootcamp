// 1. Create a function called : removecolor() that
// removes the selected color from the dropdown list.

function removeColor(){
  let color = document.getElementById("colorSelect");
  color.remove(color.selectedIndex)
}

let button = document.getElementsByTagName("input")[0];
button.addEventListener("click", removeColor)