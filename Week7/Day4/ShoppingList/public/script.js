function displayItems(event){
	event.preventDefault();

	let item = document.getElementById('item').value;
	let amount = document.getElementById('amount').value;

	fetch('/list', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({item, amount})
	})
	.then(res=> res.json())
	.then(data=> {
		let output = document.getElementById('output');
		let result = document.createElement('h3');
		result.innerText = `${data.item} : ${data.amount}`;
		output.appendChild(result)
	})
	.catch(err=> console.log(err))
	event.target.reset()
}
