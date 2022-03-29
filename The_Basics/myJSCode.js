//#1
'Maxime' + ' ' + 'St-Onge Amoretti';

//#2
let myNumber = 1995;
let ones = myNumber % 10;
ones
myNumber = (myNumber - ones) / 10;
let tens = myNumber % 10
tens
myNumber = (myNumber - tens) / 10;
let hundreds = myNumber % 10;
hundreds
let thousands = (myNumber - hundreds) / 10;
thousands

//#3
typeof 'true';
typeof false;
typeof 1.5;
typeof 2;
typeof undefined;
typeof { foo: 'bar' };

//#4
//It logs '510' instead of 5 + 10 since JS reads the '5' as a string and not as a number. It then procedes to coerce the 10 to a string and then concatenate both strings together to get the '510' result.

//#5
console.log(Number('5') + 10);

//#6
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

//#7
//No error since JS will simply return undefined

//#8
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

//#9
let pets = { asta: 'dog', butterscotch: 'cat', pudding: 'cat', neptune: 'fish', darwin: 'lizard' };

//#10
//False

//#11
//3

//#12
//True since the string 1 comes before the string 9 