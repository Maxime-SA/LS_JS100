//#1
//array1.length = 4
//array2.length = 5
//array3.length = 0
//array4.length = 3
//array5.length = 101

//#2 & #3
let myArray = [2, 5, 25, 88, 32, 101];

// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] % 2 === 0) console.log(myArray[i]);
// }

myArray.forEach(function (value) {
  if (typeof value === 'object') {
    value.forEach(function (number) {
      if (number % 2 === 0) console.log(number);
    });
  } else if (value % 2 === 0) console.log(value);
});

//#4
let myNewArray = myArray.map(number => number % 2 === 0 ? 'even' : 'odd')
console.log(myNewArray);

//#5
let myWeirdArray = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
function integerDecision(myWeirdArray) {
  return myWeirdArray.filter(value => Number.isInteger(value));
}

console.log(integerDecision(myWeirdArray));

//#6
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths(myArray) {
  let lengths = myArray.map(string => string.length);
  let oddLengths = lengths.filter(number => !(number % 2 === 0));
  return oddLengths;
};

console.log(oddLengths(arr));

//#7
let numbers = [3, 5, 7];
let sumOfSquares = numbers.reduce((accumulator, element) => accumulator + element ** 2, 0);

console.log(sumOfSquares);

//#8
function oddLength(myArray) {
  return myArray.reduce((accumulator, element) => {
    if (!(element.length % 2 === 0)) {
      accumulator.push(element.length);
    }
    return accumulator;
  }, []);
}

console.log(oddLength(arr));

//#9
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));

//#10
let newArr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12],
];

newArr[1][3] = 606;
console.log(newArr);
