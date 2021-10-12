let str ="";

for (let i = 0; i <= 5; i++) {

	str = str + "*"
	console.log(str)

}


let star="";
for (let i=0; i<6; i++){
	for(let j=0; j<i+1; j++){
		star = star + "*"
	}
	console.log(star)
	star="";
}
