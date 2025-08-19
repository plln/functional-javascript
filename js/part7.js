"use strict";

console.log('hello recursion!');

const countDownFrom = (num) => {
    if (num == 0) return num;
    else return num + countDownFrom(num - 1);
};

console.log(countDownFrom(5));

//TO-DO - apply arithmetic functions like +-* to countDownFrom
const addPartial = (a) => (b) => a + b;

let categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'birds', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'parrots', parent: 'birds' },
    { id: 'sparrows', parent: 'birds' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' },
    { id: 'golden', parent: 'dogs' },
    { id: 'labrador', parent: 'dogs' }
];

const makeTree = (categories, parent) => {
    console.log('parent', parent);
    let node = {}; //each key gets its own object
    categories
        .filter(item => item.parent === parent)
        //set the key and the value
        //value = invoke makeTree with the key as parent
        .forEach(item => node[item.id] = makeTree(categories, item.id));
    return node;
}

console.log(
    JSON.stringify(
        makeTree(categories, null), null, 2));