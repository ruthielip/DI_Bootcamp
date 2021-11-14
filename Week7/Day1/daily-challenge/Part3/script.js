const currentDateTime = require('./main.js');
const http = require('http');

const server = http.createServer(function(req, res){
	res.end(`The date and time are currently: ${currentDateTime}`)
})

server.listen(8080, () => console.log("I am listening..."))


