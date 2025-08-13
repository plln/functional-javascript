"use strict";
//console.log("Hello, World!");

//functions are values just like strings or numbers
//functions can be assigned to variables or paased into other functions - higher order functions
//higher order functions aid composition
const tripleMe = function (x) {
    return x * 3;
}

const waffle = tripleMe;
console.log('30 times 3 =', waffle(30));

var animals = [
    { name: 'FluffyKins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'fish' },
    { name: 'Harold', species: 'lizard' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'dog' },
    { name: 'Luna', species: 'cat' },
    { name: 'Fido', species: 'dog' },
    { name: 'Mittens', species: 'cat' }
]

const dogs_0 = [];
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species === 'dog') {
        dogs_0.push(animals[i]);
    }
}

console.log("Dogs:", JSON.stringify(dogs_0));

//callback function
const isDog = function (animal) {
    return animal.species === 'dog';
};

//filter is the higher order function
const dogs_1 = animals.filter(isDog);
console.log("Dogs:", JSON.stringify(dogs_1));

//const isNotDog = !isDog;
//I wish it was this simple!
const isNotDog = function (animal) {
    return !isDog(animal);
};

const others = animals.filter(isNotDog);
console.log("Other than dogs:", JSON.stringify(others));