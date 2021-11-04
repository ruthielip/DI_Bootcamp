let button = document.querySelector("button")
button.addEventListener("click", starWarsData)

async function starWarsData(){
    let loader = document.getElementById("load")
	let infoDiv = document.getElementById("info")
	
	loader.style.display = "block"
	infoDiv.innerHTML = "";

	let random = Math.floor(Math.random()*82)

	try{
		let fetched = await fetch(`https://swapi.dev/api/people/${random}`);
	    let response = await fetched.json()

	    let homeWorld = await fetch(response.homeworld);
	    let responseHomeWorld = await homeWorld.json()

	    loader.style.display = "none";

        let name = document.createElement("h1");
        name.innerText = response.name;
        infoDiv.appendChild(name)

        let height = document.createElement("p");
        height.innerText = `Height: ${response.height}`;
        infoDiv.appendChild(height)

        let gender = document.createElement("p");
        gender.innerText = `Gender: ${response.gender}`;
        infoDiv.appendChild(gender)

        let birthYear = document.createElement("p");
        birthYear.innerText = `Birth Year: ${response.birth_year}`;
        infoDiv.appendChild(birthYear)

        let home = document.createElement("p");
        home.innerText = `Home World: ${responseHomeWorld.name}`;
        infoDiv.appendChild(home)
	}

	catch (err){
		loader.style.display = "none"
		let error = document.createElement("h3");
		error.classList.add("error")
		error.innerText = "Oh No! That person isnt available";
		infoDiv.appendChild(error);
	}
    
    infoDiv.style.display = "block";
}

	

