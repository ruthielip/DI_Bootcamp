const exp = require('express');

const app = exp();

app.use('/', exp.static(__dirname + '/public'));
// app.use('/pic', exp.static(__dirname + '/picture.html'))

app.get('/aboutMe/:hobby', (req, res)=>{

	if(typeof req.params.hobby !== 'string'){
		res.status(404);
		res.send('404: Page Not Found')
	}

	res.send(req.params.hobby)
	console.log(req.params.hobby)
})

app.get('/pic', (req, res)=>{
	res.sendFile(__dirname + '/picture.html')
})

app.get('/form', (req, res)=>{
	res.sendFile(__dirname + '/public/index.html')
}).get('/formData', (req, res)=>{
	console.log(req.query);
	const {email, message} = req.query;
	res.send(`${email} sent you a message: "${message}"`)
})

app.listen(3000, ()=>{
	console.log('listening on port 3000')
})

