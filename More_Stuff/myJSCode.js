//#1
//[1, 4, 3]

//#2
//An error occurred because we didn't define greeting. The error occurred on line 4.

//#3
console.log(Math.sqrt(37));

//#4
console.log(Math.max(1, 6, 3, 2));

//#5
//It transforms the string to an array by splitting each element with a space. It then reverses the order of the array. Finally, it creates a new array containing the length of each element in the original array.

//#6
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(array, regex) {
  let newArray = []
  array.forEach(string => {
    if (regex.test(string)) newArray.push(string);
  });
  return newArray;
}

console.log(allMatches(words, /lab/));

//#7
//Exception handling is a process that deals with errors in a manageable and predictable manner. It uses the try/catch statement to catch exceptions that the code in the try block raises, and lets the programmer deal with the problem in a way that makes sense and perhaps prevents a catastrophic failure or nasty bug.

//#8
function isNotANumber(value) {
  if (value.toString() === 'NaN') return true;
  return false;
};
// console.log(isNotANumber(NaN));

//#9
function isZero(value) {
  return 1 / value === -Infinity;
};

console.log(isZero(-0))

//#10
//It returns 5 since the post-increment operator y++ returns the original value of y, not the incremented value.