"use strict";

function outer() {
  let count = 0;

  function inner() {
    let incrementedCount = ++count;
    return incrementedCount;
  }

  return inner;
}

const counter1 = outer();
const counter2 = outer();

console.log('counter1:', counter1());
console.log('counter2:', counter2());
console.log('counter1:', counter1());

function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());

function memoize(expensiveFunction) {
  const cache = {};

  function memoizedFunction(number) {
    if (cache[number]) {
      return cache[number];
    } else {
      console.debug('calling expensive function', number);
      cache[number] = expensiveFunction(number);
      return cache[number];
    }
  }

  return memoizedFunction;
}

function factorial(number, result) {
  if (number === 1) return 1;
  else return number * factorial(number - 1);
}

const memoizedFactorial = memoize(factorial);

console.log('factorial 5 =', memoizedFactorial(5));
console.log('factorial 4 =', memoizedFactorial(4));
console.log('factorial 5 =', memoizedFactorial(5));