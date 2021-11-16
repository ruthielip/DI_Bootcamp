const fs = require('fs');

// 1.
let text = 'Hello Hello'

fs.appendFile('./data', text, err=>{
	if(err){
		console.log(err)
	}
});

// 2.
newText = ', Adding more text.'
fs.appendFile('./data', newText, err=>{
	if(err){
		console.log(err)
	}
});

// 3.
fs.unlink('./data', err=>{
	if(err){
		console.log(err)
	}
});