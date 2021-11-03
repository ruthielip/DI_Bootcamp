// Exercise 1: Conversion

// Convert the below promise into async await:

fetch("https://swapi.dev/api/starships/9/")
    .then(response => response.json())
    .then(console.log);

// Answer:

async function requestData (){
	let fetched = await fetch("https://swapi.dev/api/starships/9/");
	let response = await fetched.json()
	return response;
}
requestData().then(res=> console.log(res))


// Exercise 2: Analyze

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// Analyze the code provided above what will be the outcome?
// Answer: 'calling' will be displayed first, then 2 seconds later 'resolved' will be displayed.