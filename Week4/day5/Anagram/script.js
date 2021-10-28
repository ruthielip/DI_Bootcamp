function anagram(first ,second){

	first = first.replace(/\s+/g, '');
	second = second.replace(/\s+/g, '');
    
	let firstSentence = first.length;
	let secondSentence = second.length;

	if(firstSentence !== secondSentence){
		return false;
	}
       let one = first.toLowerCase().split("").sort().join("");
       let two = second.toLowerCase().split("").sort().join("");

	return one === two ? true : false;
           
}

console.log(anagram("Astronomer", "Moon starer"))
console.log(anagram("School master", "The classroom"))
console.log(anagram("The Morse Code", "Here come dots"))
console.log(anagram("Test string", "Test wrongs"))