let newAttr = document.getElementById('navBar');
newAttr.setAttribute("id", "socialNetworkNavigation")

let newLi = document.createElement("li");
let newText = document.createTextNode("Logout");
newLi.appendChild(newText);
let ulParent = document.body.firstElementChild.firstElementChild;
ulParent.appendChild(newLi);

