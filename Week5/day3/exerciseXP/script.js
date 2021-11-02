// Exercise 1 : Comparison

// 1. Create a function called compareToTen that takes a number as an argument.
// 2. The function should return a Promise that tests if the value of the given 
// argument is less or greater than 10.

function comapareToTen(number){
	return new Promise((resolve, reject)=>{
		if(number>=10){
		resolve(`${number} is bigger than 10, success!`)
	} else {
		reject(`${number} is less than 10, error!`)
	}
	})
}

comapareToTen(15)
    .then(result=> console.log(result))
    .catch(error => console.log(error))

comapareToTen(5)
    .then(result=> console.log(result))
    .catch(error => console.log(error))    

// Exercise 2 : Promises

// 1. Create a promise that resolves itself in 4 seconds and returns a “success” 
// string.

let successString = new Promise(function(resolve){
	setTimeout(()=> {
        resolve("1st success");
	}, 4000)
})

successString.then(value=> console.log(value))

// 2. Read about Promise.resolve() and Promise.reject().
// 3. How can you make your promise from part 1 shorter using Promise.resolve() 
// and console.log “success”?

Promise.resolve("2nd success").then(value=> setTimeout(()=>{
	console.log(value)
}, 4000))

// 4. Add code to catch errors and console.log ‘Ooops something went wrong’.

Promise.reject("Error!!!").catch(error=> console.log(error))

// Exercise 3 : Resolve & Reject

// 1. Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// 2. Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

Promise.resolve(3).then(value=> console.log(value))
Promise.reject("Boo!").catch(error=> console.log(error))