const exp = require('express');

const app = exp();

app.listen(3000, ()=>{
	console.log('listening on port 3000');
})

app.use('/', exp.static(__dirname + '/public'));

app.get('/user', (req, res)=>{
	const user = {
        firstname: 'John',
        lastname: 'Doe'
    };
    console.log(user);
    res.send(user);
})