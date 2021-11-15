fetch('http://localhost:3000/user')
   .then((res)=> res.json())
   .then((data)=> document.body.innerText = JSON.stringify(data))
   .catch((err)=> console.log(err))