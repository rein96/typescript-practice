const circ = (diameter: number) => {
  return diameter * Math.PI;
}

console.log(circ(7.5))

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
  // skills: ['running'],
};

// explicit types
let character: string;
let age: number;
let isLoggedin: boolean;

// arrays
let ninjas: string[] = [];

ninjas.push('shaun');

// union types
let mixedTwo: (string | number)[] = [];
mixedTwo.push('hello')
mixedTwo.push(20)

// objects
let ninjaOne: object; // [] is 'object' too
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
};
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };

// ANY
let ageTwo: any = 25;

ageTwo = true;
console.log(ageTwo);
ageTwo = 'hello';
console.log(ageTwo);
ageTwo = { name: 'luigi' };
console.log(ageTwo);

let mixedThree: any[] = [];

mixedThree.push(5);
mixedThree.push('mario');
mixedThree.push(false);
console.log(mixedThree);

let ninjaThree: { name: any, age: any };

ninjaThree = { name: 'yoshi', age: 25 };
console.log(ninjaThree);

ninjaThree = { name: 25, age: 'yoshi' };
console.log(ninjaThree);

// Function

const add = (a: number, b: number, c?: number | string): void => {
  // c? => c is optional
  // void -> not return anything
  console.log({ a, b, c })
}

add(5, 10)

const minus = (a: number, b: number): number => { // this fn must return 'number'
  console.log({ a, b });
  return a - b
}

minus(10, 7)

// Type aliases
type StringOrNum = string | number;
type personObj = { name: string, uid: StringOrNum }

const logDetails = (uid: StringOrNum, item: string) => {
  console.log({ uid, item })
}

const greet = (user: personObj) => {
  console.log({ user });
}

const greetAgain = (user: personObj) => {
  console.log({ user });
}

// Function signatures
// Example 1
let greeting: (a: string, b: string) => void;

greeting = (name: string, greeting: string) => {
  console.log({ name, greeting });
}

// Example 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo
  } else {
    return numOne - numTwo
  }
}

// Example 3
let loginTwo: (obj: { name: string, age: number }) => void;

type personObjTwo = { name: string, age: number }

loginTwo = (ninja: personObjTwo) => {
  console.log({ ninja });
}





