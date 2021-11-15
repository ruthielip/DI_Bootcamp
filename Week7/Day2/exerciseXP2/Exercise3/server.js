const exp = require('express');

const app = exp();

app.use('/', exp.static(__dirname + '/public'));

app.listen(3000, ()=>{
	console.log('listening on port 3000')
})