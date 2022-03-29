//#1
//student.courses

//#2
//jane['location']['country']

//#3
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age = 5
fido['favorite food'] = 'spaghetti'

console.log(fido);

//#4
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) {console.log(`Hej, ${name}!`)}
};

jane.greet('Bobby');

//#5
//The bracket notation will use Indian as the key for the value Pacific

//#6
//Property names are always strings

//#7
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);
console.log(keys);

//#8
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

console.log(Object.entries(person));

//#9
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let newObj = {};

for (let i = 0; i < nestedArray.length; i += 1) {
  newObj[nestedArray[i][0]] = nestedArray[i][1];
}

console.log(newObj);

//#10
//Object.assign({}, copiedObject)