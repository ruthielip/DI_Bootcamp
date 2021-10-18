let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

for (let i in planets) {
	// let allPlanets = planets[i];
	let planetsDiv = document.createElement("div");
	planetsDiv.innerHTML = planets[i];
	document.body.appendChild(planetsDiv)
	planetsDiv.className = "planet";
    planetsDiv.setAttribute("id", [i])
};

document.getElementById("0").style.backgroundColor = "#a2dbd7";
document.getElementById("1").style.backgroundColor = "#fcf9e6";
document.getElementById("2").style.backgroundColor = "#b0dcf5";
document.getElementById("3").style.backgroundColor = "#e35b52";
document.getElementById("4").style.backgroundColor = "#e9ffd9";
document.getElementById("5").style.backgroundColor = "#f2e396";
document.getElementById("6").style.backgroundColor = "#addeb4";
document.getElementById("7").style.backgroundColor = "#adb1de";

