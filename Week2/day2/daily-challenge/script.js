let sentence = "It is not so bad to take a break";
let wordNot = sentence.substring(6, 9);
let wordBad = sentence.substring(13, 16);
let notBad = sentence.substring(6, 16);
let newWord = sentence.replace(notBad, "good")

if (wordNot > wordBad) {

	console.log(newWord)

} else {

	console.log(sentence)
}


// Another attempt:

// let sentence = "It is not so bad to take a break";
// let sent = ["It"," is"," not"," so"," bad"," to"," take"," a"," break"];

// let wordNot = 2;
// let wordBad = 4; 

// if (wordNot < wordBad)
// {
// 	sent.splice(4,1," good")
// 	sent.splice(3,1)
// 	sent.splice(2,1)
//     newSentence = sent.join("");
//     console.log(newSentence)
// } else {
// 	console.log(sentence)
// }
