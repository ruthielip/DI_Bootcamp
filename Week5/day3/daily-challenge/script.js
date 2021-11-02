// 1st Daily Challenge

function makeAllCaps(strings){
	return new Promise((resolve, reject)=>{
		if(Array.isArray(strings)){
			resolve(strings.map((element)=> element.toUpperCase()))
		} else {
			reject("Error: not an array")
		}
	})
}

function sortWords(strings){
	return new Promise((resolve, reject)=>{
		if(Array.isArray(strings)){
			resolve(strings.sort())
		} else {
			reject("Error")
		}
	})
}

makeAllCaps(['Semi', 'charmed', 'life'])
    .then(sortWords)
    .then((result)=> console.log(result))
    .catch((error)=> console.log(error))


// 2nd Daily Challenge

let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJS(object){
	return new Promise((resolve, reject)=>{
		if(object === ""){
			reject("Error: Object empty")
		} else {
			resolve(JSON.parse(object))
		}
	})
}

function toMorse(morseJS){
    
    let userSentence = prompt('Enter a sentence').toLowerCase().replace(/\s/g, '');
	let morseArray = [];

    return new Promise((resolve, reject)=> {
	    for(let letter of userSentence){
		    if(!(letter in morseJS)){
		    	reject("Error: invalid character entered")
		    } else {
		    	morseArray.push(morseJS[letter])
		    }
	   }
	   resolve(morseArray)
    })
}

function joinWords(words){
    return new Promise((resolve)=> {
    	resolve(words.join('\n'))
    })
}

toJS(morse)
    .then((element)=> toMorse(element))
    .then((element)=> joinWords(element))
    .then((element)=> console.log(element))
    .catch((error)=> console.log(error))