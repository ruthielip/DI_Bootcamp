const fs = require('fs');

fs.readFile('./text', (err, data)=>{
	if(err){
		console.log(err)
	} else {
		console.log(data.toString())
	}
});

