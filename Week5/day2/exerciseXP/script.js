// Exercise 1 : Giphy API

// Create a program to retrieve the data from the API URL provided above. 
// Use XMLHttpRequest object to make an AJAX request to the Giphy API and 
// console.log the Javascript Object.

// let xhr = new XMLHttpRequest();

// xhr.open('GET','https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

// xhr.responseType = 'json';

// xhr.send()

// xhr.onload = function(){
// 	if(xhr.status !== 200){
//         console.log("ERROR")
// 	} else {
// 		console.log(xhr.response.data)
// 	}
// }

// Exercise 2 : Giphy API

// Using this part of the documention, retrieve 10 gifs about the “sun”. 
// The starting position of the results should be 2.

let xhr = new XMLHttpRequest();

xhr.open('GET','https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

xhr.responseType = 'json';

xhr.send()

xhr.onload = function(){
	if(xhr.status !== 200){
        console.log("ERROR")
	} else {
		for(let i=2; i<12; i++){
			let gif = document.createElement("img");
			gif.setAttribute('src', xhr.response.data[i]["images"]["downsized"]["url"]);
			document.body.append(gif)
		}
	}
}

