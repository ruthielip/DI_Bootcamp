const exp = require('express');
const cors = require('cors');
const env = require('dotenv');
const fs = require('fs');

const app = exp();
env.config();

const fileList = __dirname + '/items.json';

app.use(cors());
app.use(exp.urlencoded());
app.use(exp.json());

app.use('/', exp.static(__dirname + '/public'));


app.post('/list', (req, res)=>{
	const file = JSON.parse(fs.readFileSync(fileList));
	
	file.push(req.body)
    
    fs.writeFileSync(fileList, JSON.stringify(file, null, 2));
    res.send(req.body)
})

app.listen(process.env.PORT, ()=>{
	console.log(`listening on port ${process.env.PORT}`)
})

