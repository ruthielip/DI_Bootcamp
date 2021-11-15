const http = require('http');

const server = http.createServer((req, res)=>{
	const user = {
        firstname: 'John',
        lastname: 'Doe'
    }

    res.end(JSON.stringify(user));
    res.json(user)
})

server.listen(8080, ()=>{
	console.log('listening on port 8080')
})