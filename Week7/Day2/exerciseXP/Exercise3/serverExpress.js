const exp = require('express');

const app = exp();

app.get('/', (req, res)=>{
	res.end('<h1>This is an HTML tag');
})

app.listen(3000, ()=>{
	console.log('listening on port 3000')
})