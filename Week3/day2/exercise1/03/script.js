function sphere()
 {
 	event.preventDefault();
    let radius = document.getElementById("radius").value;
	let pie = 3.14285714286; 
    let volume = (4/3)*pie*(radius*radius*radius); 
    document.getElementById("volume").value = volume;
 } 

let form = document.getElementById("MyForm");
form.addEventListener("submit", sphere)