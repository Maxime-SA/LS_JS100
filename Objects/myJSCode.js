//#1
let person = {
  name: 'Bob',
  occupation: 'web developer',
  hobbies: 'painting',
};
console.log(person.name);
console.log(person['name']);

//#2
//They are all valid keys but JS will coerce non-string keys to be strings

//#3
let myArray = {
  0: 'Maxime',
  1: 'St-Onge Amoretti',
  2: 'Actuary For the Moment!',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

//#4
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keys = Object.keys(obj);
let newArray = keys.map(string => string.toUpperCase());
console.log(newArray);

//#5
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

//#6
//Primitive, Primitive, Object, Primitive, Neither, Object, Primitive, Object

//#7
myObj.qux = 3;
//They do not produce the same output because the for/in loop will go over the prototype keys as well whereas the Object.keys method will only return the object's own keys

//#8
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(objectToCopy, keysToCopy) {
  let newObject = {};

  if (!(typeof keysToCopy === 'object')) return Object.assign(newObject, objectToCopy);

  for (let keys in objectToCopy) {
    if (keysToCopy.includes(keys)) newObject[keys] = objectToCopy[keys];
  }
  return newObject;
}

console.log(copyObj(objToCopy, ['foo', 'bar']));

//#9
//The program logs 'Hi' and 'Hello'. This is because objects are mutable whereas strings and other primitive values are not.

//#10
//There are 6 primitive values and 4 objects

//#11
let myNewObj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12],
};

myNewObj.bar[3].xyz = 606