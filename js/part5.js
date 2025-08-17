"use strict";

//pure function - stack memory (short lived)
function add(a, b) {
    return a + b;
}

console.log('add 3 (pure)', add(2, 3));

//inner function is accessing the scope of outer function
//it preserves the context since it uses heap memory
function outer() {
    const a = 3;

    function inner(b) {
        return a + b;
    }

    return inner;
}

let add3 = outer();
console.log('add 3 (impure)', add3(2));


function greet(who) {
    return () => {
        let message = `Hello, ${who}!`;
        console.log(message);
    }
}

greet('Batman')();
console.dir(greet);

const greetBatman = greet('Batman');
greetBatman();

for (let i = 0; i < 3; i++) {
    const log = () => console.log(i);
    setTimeout(log, 1000);
}

for (var i = 0; i < 3; i++) {
    ((i) => {
        const log = () => console.log(i);
        setTimeout(log, 1000);
    })(i);
}
