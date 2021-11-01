const params = new URLSearchParams;
console.log(params)
document.querySelector('button').addEventListener("click", function(event){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://api.giphy.com/v1/gifs/random?limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

    xhr.responseType = 'json';

    xhr.send()

    xhr.onload = function(){
        console.log(xhr.response.data.image_url)
        let gif = document.createElement("img");
        gif.setAttribute('src', xhr.response.data.image_url)
        document.body.append(gif)
    }
})
