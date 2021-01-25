"use strict";
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3);
// names[1] = 3;
var numbers = [10, 20, 12, 15];
numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// objects
var ninja = {
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
var character;
var age;
var isLoggedin;
// arrays
var ninjas = [];
ninjas.push('shaun');
// union types
var mixedTwo = [];
mixedTwo.push('hello');
mixedTwo.push(20);
// objects
var ninjaOne; // [] is 'object' too
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };
// ANY
var ageTwo = 25;
ageTwo = true;
console.log(ageTwo);
ageTwo = 'hello';
console.log(ageTwo);
ageTwo = { name: 'luigi' };
console.log(ageTwo);
var mixedThree = [];
mixedThree.push(5);
mixedThree.push('mario');
mixedThree.push(false);
console.log(mixedThree);
var ninjaThree;
ninjaThree = { name: 'yoshi', age: 25 };
console.log(ninjaThree);
ninjaThree = { name: 25, age: 'yoshi' };
console.log(ninjaThree);
// Function
var add = function (a, b, c) {
    // c? => c is optional
    // void -> not return anything
    console.log({ a: a, b: b, c: c });
};
add(5, 10);
var minus = function (a, b) {
    console.log({ a: a, b: b });
    return a - b;
};
minus(10, 7);
var logDetails = function (uid, item) {
    console.log({ uid: uid, item: item });
};
var greet = function (user) {
    console.log({ user: user });
};
var greetAgain = function (user) {
    console.log({ user: user });
};
// Function signatures
// Example 1
var greeting;
greeting = function (name, greeting) {
    console.log({ name: name, greeting: greeting });
};
// Example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// Example 3
var loginTwo;
loginTwo = function (ninja) {
    console.log({ ninja: ninja });
};
