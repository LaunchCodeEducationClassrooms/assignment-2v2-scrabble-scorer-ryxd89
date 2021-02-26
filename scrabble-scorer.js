// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
const simpleScoreStructure = {
  1: ['A', 'B', 'C','D','E','F','G', 'H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
};

const vowelBonusStructure = {
  1: ["B",'C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'],
  3: ['A','E','I','O','U']
}

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
	for (let i = 0; i < word.length; i++) {
	  for (const pointValue in oldPointStructure
    ) {
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
	}
	return letterPoints;
 }
function simpleScore(word) {
	word = word.toUpperCase();
	let letterPoints = "";
	for (let i = 0; i < word.length; i++) {
	  for (const pointValue in simpleScoreStructure ) {
		 if (simpleScoreStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
	}
	return Number(letterPoints);
 };

function vowelBonusScore(word) {
	word = word.toUpperCase();
	let letterPoints = "";
	for (let i = 0; i < word.length; i++) {
	  for (const pointValue in vowelBonusStructure) {
		 if (vowelBonusStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
	}
	return Number(letterPoints);
 };

function scrabbleScore(word){

word = word.toLowerCase();
	let letterPoints = 0;
	for (let i = 0; i < word.length; i++) {
	  for (letter in newPointStructure) {      
		 if (letter == word[i] ) {
       	letterPoints += Number(newPointStructure[letter])
		 }
	  }
	}
	return Number(letterPoints);
 }


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word
function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word: ");
   word = input.question("Enter a word to score: ")
   return word;
};
let simpleScorer = {name:`Simple Score`, description:`Each letter is worth 1 point`, scoringFunction:simpleScore};
let vowelBonusScorer = {name:`Vowel Bonus`, description:`Vowels are worth 3 points and consonants are worth 1 point`, scoringFunction:vowelBonusScore};
let scrabbleScorer = {name:`Scrabble`, description:`The original Scrabble scores`, scoringFunction:scrabbleScore};

const scoringAlgorithms = [scrabbleScore, simpleScore, vowelBonusScore];

function scorerPrompt()  {
  console.log(`Which scoring method would you like to use?\n\n
0 - ${simpleScorer.name}: ${simpleScorer.description}\n
1 - ${vowelBonusScorer.name}: ${vowelBonusScore.description}\n
2 - ${scrabbleScorer.name}: ${scrabbleScorer.description}\n`)
  let num = input.question("Enter 0, 1, or 2: ")
  if (num == 0) {
    return console.log(`Your score for '${word}': ${simpleScorer.scoringFunction(word)}`)
  } else if (num == 1) {
    return console.log(`Your score for '${word}': ${vowelBonusScorer.scoringFunction(word)}`)
  } else if (num == 2) {
    return console.log(`Your score for '${word}':\n${scrabbleScorer.scoringFunction(word)}`)
  } else {

  }
}
function transform(object) {
  let newObject = {}
  
  for (item in object) {
    let change = 0
     while (change < object[item].length) {
      let newKey = object[item][change]
      newKey = newKey.toLowerCase()
      newObject[`${newKey}`] = Number(item);
      change++
    }
  }
  return newObject
};

let newPointStructure = transform(oldPointStructure);
newPointStructure[' '] = 0
function runProgram() {
   initialPrompt();
   scorerPrompt()
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

