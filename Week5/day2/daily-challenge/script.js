let button = document.getElementById("btn");
button.addEventListener("click", displayGifs)

function displayGifs(event) {
  event.preventDefault();

  let input = document.getElementById("search").value;

  xhr = new XMLHttpRequest();
  
  xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${input}&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = () => {
    if(xhr.status != 200){
      console.log(`Error`);
    }
    else{
      xmlFunc(xhr.response);
    }
  }
}

function xmlFunc(gif){
	let input = document.getElementById("search");
	input.value = "";

	let div = document.querySelector("div");

	let newDiv = document.createElement("div");
	div.appendChild(newDiv)

	let image = document.createElement("img");
	image.setAttribute("src", gif.data[0]["images"]["downsized"]["url"]);
	image.classList.add("gif")
	newDiv.appendChild(image)

	let p = document.createElement("p");
	p.textContent = gif["data"][0]["title"];
    newDiv.appendChild(p) 

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete gif";
    newDiv.appendChild(deleteButton)
    deleteButton.addEventListener("click", function(event){
        newDiv.remove(image)
    })
}



let deleteAll = document.getElementById("delete");
deleteAll.addEventListener("click", function(){
	let div = document.querySelector("div");
	div.remove();
})