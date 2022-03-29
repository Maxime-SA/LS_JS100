//#1
//false, null, undefined, NaN, an empty string, 0, -0, and 0n

//#2
let randomNumber = Math.round(Math.random());

if (randomNumber) {
    console.log('Yes!');
  } else {
    console.log('No.');
}

//#3
console.log(randomNumber ? 'Yes!' : 'No.');

//#4
let weather = 'sunny';

if (weather === 'sunny') {
  console.log("It's a beautiful day!");
} else if (weather === 'rainy') {
  console.log('Grab your umbrella.');
} else {
  console.log("Let's stay inside.");
}

//#5
//It will log neigh, tweet tweet, and *criket* because we did not use the word break

//#6
switch (weather) {
  case 'sunny':
    console.log('It is a beautiful day!');
    break;
  case 'rainy':
    console.log('Grab your umbrella');
    break; 
  default:
    console.log('YOLO!');
}

//#7
//Yes!

//#8
//No ...

//#9
//$3.99

//#10
//true