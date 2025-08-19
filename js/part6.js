"use strict";

const descDragon_0 = (name, size, element) => {
    return `${name} is a ${size} dragon that breathes ${element}!`;
}

console.log(descDragon_0('toothless', 'tiny', 'lightning'));

const descDragon_1 =
    name =>
        size =>
            element => `${name} is a ${size} dragon that breathes ${element}!`;

console.log(descDragon_1('toothless')('tiny')('lightning'));

const toothless = descDragon_1('toothless');
const tinyDargon = toothless('tiny');
const completeDragon = tinyDargon('lightning');

console.log(completeDragon);

let dragons = [
    { name: 'toothless', size: 'tiny', element: 'lightning' },
    { name: 'smaug', size: 'huge', element: 'fire' },
    { name: 'falkor', size: 'large', element: 'luck' },
    { name: 'saphira', size: 'large', element: 'water' },
    { name: 'draco', size: 'medium', element: 'ice' }
];

const hasElementComplete = (element, item) => element === item.element;

const hasElementPartial = (element) =>
    (item) => element === item.element;

const luckyFilter = hasElementPartial('luck');
const lightningFilter = hasElementPartial('lightning');

const luckyDragons = dragons.filter(luckyFilter);
console.log(JSON.stringify(luckyDragons));

const lightningDragons = dragons.filter(lightningFilter);
console.log(JSON.stringify(lightningDragons));

const fireDragons = dragons.filter(item => hasElementComplete('fire', item));
console.log(JSON.stringify(fireDragons));

//a curried function is simply a function that takes every argument by itself
//and returns a new function that expects the next dependency until all dependencies
//have been fulfilled

const expectedCTC = (percent) => {
    return (currentCTC) => (percent / 100) * currentCTC + currentCTC;
};

const tenPercentHike = expectedCTC(10);
console.log(tenPercentHike(3800000));

const fifteenPercentHike = expectedCTC(15);
console.log(fifteenPercentHike(3800000));