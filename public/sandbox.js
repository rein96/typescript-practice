"use strict";
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// arrays
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3);
// names[1] = 3;
let numbers = [10, 20, 12, 15];
numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';
let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
};
// explicit types
let character;
let age;
let isLoggedin;
// arrays
let ninjas = [];
ninjas.push('shaun');
// union types
let mixedTwo = [];
mixedTwo.push('hello');
mixedTwo.push(20);
// objects
let ninjaOne; // [] is 'object' too
ninjaOne = { name: 'yoshi', age: 30 };
let ninjaTwo;
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };
// ANY
let ageTwo = 25;
ageTwo = true;
console.log(ageTwo);
ageTwo = 'hello';
console.log(ageTwo);
ageTwo = { name: 'luigi' };
console.log(ageTwo);
let mixedThree = [];
mixedThree.push(5);
mixedThree.push('mario');
mixedThree.push(false);
console.log(mixedThree);
let ninjaThree;
ninjaThree = { name: 'yoshi', age: 25 };
console.log(ninjaThree);
ninjaThree = { name: 25, age: 'yoshi' };
console.log(ninjaThree);
// Function
const add = (a, b, c) => {
    // c? => c is optional
    // void -> not return anything
    console.log({ a, b, c });
};
add(5, 10);
const minus = (a, b) => {
    console.log({ a, b });
    return a - b;
};
minus(10, 7);
const logDetails = (uid, item) => {
    console.log({ uid, item });
};
const greet = (user) => {
    console.log({ user });
};
const greetAgain = (user) => {
    console.log({ user });
};
// Function signatures
// Example 1
let greeting;
greeting = (name, greeting) => {
    console.log({ name, greeting });
};
// Example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// Example 3
let loginTwo;
loginTwo = (ninja) => {
    console.log({ ninja });
};
