const retrieveData = async()=>{
	const fetched = await fetch("http://api.currencylayer.com/list?access_key=27e79a83bb05037457b106b6643a86f8&format=1");
	const response = await fetched.json();
	const info = Object.entries(response.currencies);
	dropdown(info)
}

const dropdown = (data) => {
    let from = document.getElementById("from");
    for(let i = 0; i < data.length; i++){
    	let option = document.createElement("option");
        option.innerText = data[i][0] + " - " + data[i][1];
        from.appendChild(option);
    }

    let to = document.getElementById("to");
    for(let i = 0; i < data.length; i++){
    	let option = document.createElement("option");
        option.innerText = data[i][0] + " - " + data[i][1];
        to.appendChild(option);
    }	
}

const converter = async(event) =>{

	let input = document.getElementById("input");
	let from = document.getElementById("from");
	let to = document.getElementById("to");
	let result = document.getElementById("result");
	result.innerText="";

	let amount = input.value;
	let fromOption = from.value;
	let toOption = to.value;
	try{
		let fetchFrom = await fetch(`http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&currencies=${fromOption.substring(0,3)}&format=1`)
        let responseFrom = await fetchFrom.json()
        let fetchTo = await fetch(`http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&currencies=${toOption.substring(0,3)}&format=1`)
        let responseTo = await fetchTo.json();
        let one = responseFrom.quotes;
        let two = responseTo.quotes;

        let output = document.createElement("p");
        output.innerText = (Object.values(two)/Object.values(one))*input.value;
        result.appendChild(output)
	} catch(err) {
		let output = document.createElement("p");
        output.innerText = "Error!"
        result.appendChild(output)
	}
    

}

let button = document.getElementById("button");
button.addEventListener("click", converter)






retrieveData()