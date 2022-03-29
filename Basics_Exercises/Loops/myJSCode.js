//#1
for (let i = 1; i <= 10; i += 1) {
  console.log(i)
}

//#2
for (let i = 10; i > 0; i -= 1) {
  console.log(i)
}
console.log('Launch!')

//#3
let greeting = 'Aloha!';
for (let i = 1; i <= 3; i += 1) {
  console.log('Aloha!');
}

//#4
for (let i = 1; i <= 100; i += 1) {
  console.log(i * 2);
}

//#5
let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}

//#6
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) continue;
  console.log(cities[i]);
}

//#7
//This is because we didn't put a condition for the program to know when to terminate the loop
//We can use the statement break in order to exit the loop during the first iteration

//#8
let counter = 1;

while (counter <= 40) {
  console.log(counter);
  counter += 2;
}

//#9
let fish = ['Pogo', 'Timmy', 'Billy', 'Gill', 'Nemo', 'Bruce'];
let newCounter = 0;

do {
  console.log(fish[newCounter]);
  newCounter += 1;
} while (fish[newCounter-1] !== 'Nemo')

//#10
//The first part does not log anything whereas the second part logs the code once since the condition is checked after running the code at least once
