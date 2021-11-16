const exp = require('express');

const app = exp();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req,res)=>{
	res.sendFile(__dirname + '/public/index.html')
})
   .post('/', (req, res)=>{
	console.log(req.body);
	res.send(req.body);
})

app.listen(3001, ()=>{
	'listening on port 3001'
});