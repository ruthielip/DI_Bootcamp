const http = require('http');
const largeNumber = require('./main.js');
const b = 5;

console.log('Hello');

const server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.end(`
		<p>My Module is: </p>
        ${largeNumber + b}
        <h1>Hi there at the frontend</h1>
        `)
});

server.listen(3000, () => console.log('I am listening...'))