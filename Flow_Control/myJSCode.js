//#1
//false
//true
//3
//3
//false
//true
//false
//false
//false
//true
//false
//true

//#2 & #3
function evenOrOdd(myInteger) {
  if (!Number.isInteger(myInteger)) {
    console.log('Please input an integer.');
    return;
  }

  if (myInteger % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

//#4
//Product2, Product3, and Product not found!
//This is because we omitted the break statement

//#5
// if (foo()) {
//   return 'bar';
// } else {
//   return qux();
// }

//#6
//The output is Not Empty since an empty array is not a falsy

//#7
function convertString(myString) {
  if (myString.length > 10) {
    return myString.toUpperCase();
  } else {
    return myString;
  }
}

//#8
function numberInterval(myNumber) {
  switch (true) {
    case myNumber < 0:
      console.log(`${myNumber} is less than 0`);
      break;
    case myNumber <= 50:
      console.log(`${myNumber} is between 0 and 50`);
      break;
    case myNumber <= 100:
      console.log(`${myNumber} is between 51 and 100`);
      break;
    default:
      console.log(`${myNumber} is greater than 100`);
      break;
  }
}
