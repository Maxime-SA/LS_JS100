//#1
let myString = "These aren't the droids you're looking for.";
console.log(myString.length);

//#2
console.log(myString.toUpperCase());

//#3
function repeat(numberOfTimes, string) {
  
  let newString = '';
  for (let i = 1; i <= numberOfTimes; i += 1) {
    newString += string;
  }
  return newString;

};

console.log(repeat(3, 'ILoveYou'));

//#4
let myRhyme = `A pirate I was meant to be!\nTrim the sails and roam the sea!`;
console.log(myRhyme);

//#5
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

console.log(string1.toUpperCase() === string2.toUpperCase());

//#6
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
console.log(/x/.test(byteSequence));

//#7 & 8
let isBlank = string => string.trim().length === 0;
console.log(isBlank('mars'));
console.log(isBlank('  '));
console.log(isBlank(''));

//#9
let word = 'launch school tech & talk';
console.log(word.split(' ').map(string => string[0].toUpperCase() + string.slice(1)).join(' '));