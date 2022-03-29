//#1
//It will log 1 to the console since bar is a global variable whereas the bar variable in the foo function is a local variable.

// #2
function askQuestion(question) {
  let rlSync = require('readline-sync');
  let answer = rlSync.question(question);
  return answer;
}

console.log(`Hello, ${askQuestion('What is your first name? ')} ${askQuestion('What is your last name? ')}!`);

//#3
function multiply(question) {
  let rlSync = require('readline-sync');
  let answer = rlSync.question(question);
  return Number(answer);
}

firstNumber = multiply('Enter the first number: ');
secondNumber = multiply('Enter the second number: ');
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);

//#4
//It doesn't log anything to the console because once the function reaches the return statement, it terminates the function.

//#5
//It doens't log anything to the console but it returns Yipeee!!!!