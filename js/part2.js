"use strict";

const names_0 = [];
for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    names_0.push(animal.name);
}
console.log('animal names (for loop)', names_0);

const getName = (animal) => animal.name;

const names_1 = animals.map(getName);
console.log('animal names (functional)', names_1);

const compareArrays = (a, b) =>
    a.length === b.length &&
    a.every((element, index) => element === b[index]);

console.log("Array equals?", compareArrays(names_0, names_1));
