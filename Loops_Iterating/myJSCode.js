//#1
let rlSync = require('readline-sync');
let myAge = Number(rlSync.question('How old are you? '));

console.log(`You are ${myAge} years old.`);

for (let index = 1; index <= 4; index++) {
  console.log(`In ${10 * index} years, you will be ${myAge + 10 * index} years old.`);
}

//#2 and #6
function factorial(myNumber) {
  if (myNumber === 0) return 1;
  return myNumber * factorial(myNumber - 1);
}

//#3
//The condition is always true and the if statement is never executed since counter is always 1 when the program gets to that portion

//#4
//It does not produce an error since the "next value" component is optional. The (i += 1) takes care of not making an infinite loop

//#5
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log(`It took ${tries} tries to get a number greater than 2`);