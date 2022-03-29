//#1
let rlSync = require('readline-sync');
let name = rlSync.question('What is your name? ');
console.log(`Hello, ${name}!`);

//#2
let firstName = rlSync.question('What is your first name? ');
let lastName = rlSync.question('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);

//#3
let myAge = Number(rlSync.question('How old are you? '));
console.log(`You are ${myAge} years old.`);
console.log(`In 10 years, you will be ${myAge + 10} years old.`);
console.log(`In 20 years, you will be ${myAge + 20} years old.`);
console.log(`In 30 years, you will be ${myAge + 30} years old.`);
console.log(`In 40 years, you will be ${myAge + 40} years old.`);