//#1 & 2
function greet(greeting = 'Hello', recipient = 'world') {
  console.log(greeting + ', ' + recipient + '!');
}

//#3
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(greeting() + ', ' + recipient() + '!');
}

//#4
function calculateBMI(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  let bmi = weightInKilograms / heightInMeters**2;

  return bmi.toFixed(2);
}

//#5
function humanToCat(age) {
  switch (age) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + 4 * (age -2);
  }
}

//#6
let removeLastChar = string => string.substring(0, string.length - 1);

console.log(removeLastChar('ciao!'));

//#7
const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);

console.log(sentence('like', 'birds'));

//#8
let initGame = () => {
  return {level: 1, score: 0}
};