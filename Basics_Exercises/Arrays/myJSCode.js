//#1
let myArray = ['Earth', 'Moon', 'Mars'];
function firstElement(array) {
  return array[0];
}

//#2
function lastElement(array) {
  return array[array.length - 1];
}

//#3
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

let newArray = energy.filter(value => value !== 'fossil')
newArray.push('geothermal');

console.log(newArray);

//#4
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let charactersAlphabet = alphabet.split('');
console.log(charactersAlphabet);

//#5
let scores = [96, 47, 113, 89, 100, 102];
console.log(scores.filter(num => num > 100).length);

//#6
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let i = 0; i < vocabulary.length; i += 1) {
  for (let y = 0; y < vocabulary[i].length; y += 1) {
    console.log(vocabulary[i][y]);
  }
}

//#7
//This will log false since arrays are objects and JS compares objects by checking whether they reference the same location in memory.
//Because we constructed two arrays, they do not point to the same location in memory.

//#8
//We can use Array.isArray(argument) to test whether the argument is an array

//#9
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

let contains = (value, array) => array.filter(string => string === value).length === 1 ? true : false; 

console.log(contains('Barcelona', destinations));
console.log(contains('Nashville', destinations));

//#10
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
console.log(passcode.join('-'));

//#11
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
let originalLength = groceryList.length;

for (let i = 0; i < originalLength; i += 1) {
  console.log(groceryList.pop());
}