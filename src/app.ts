const anchor = document.querySelector('a');

// console.log(anchor.href) // this will error

// solution 1
if (anchor) console.log(anchor.href);

// solution 2
const anchorSolutionTwo = document.querySelector('a')!; // ! => force ts it will return something
console.log(anchorSolutionTwo.href);

// solution 3
console.log(anchor?.href) // optional chaining !

// classes 
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(): string {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('mario', 'work for website', 250)
const invTwo = new Invoice('luigi', 'work for website', 1000)

let invoices: Invoice[] = [];   // Force array of object must be Invoice class
invoices.push(invOne);
invoices.push(invTwo);
console.log({ invOne, invTwo });


//////////////////
import { Invoice2nd } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';

const invOne2nd = new Invoice2nd('mario', 'work for website', 250)
const invTwo2nd = new Invoice2nd('luigi', 'work for website', 1000)

console.log({ invOne2nd, invTwo2nd });

// interfaces
interface isPerson {
    name: string,
    age: number,
    speak(a: string): void;
    spend(a: number): number;
}

const me: isPerson = {
    name: 'rein',
    age: 40,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log(`I spent ${amount}`)
        return amount;
    }
}

const greetPerson = (person: isPerson) => {
    console.log(`hello ${person.name}`);
}

greetPerson(me)

// Interfaces with classes
// import { Invoice2nd } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter'


let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice2nd('yoshi', 'web work', 400);
docTwo = new Payment('mario', 'plumbing work', 500)

let docs: HasFormatter[] = [];
docs.push(docOne)
docs.push(docTwo)

console.log({ docs });

// THE REAL APP LOGIC
// The DOM & Type Casting
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')! // class="item-list"
const list = new ListTemplate(ul);  // ul -> container parameter constructor

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number] = [toFrom.value, details.value, amount.valueAsNumber]

    // console.log('values', values);
    // console.log('...values', ...values);
    
    let doc: HasFormatter;
    if (type.value === 'invoice') {
        // doc = new Invoice2nd(toFrom.value, details.value, amount.valueAsNumber)  // without Tuples
        doc = new Invoice2nd(...values) // with Tuples
    } else {
        // doc = new Payment(toFrom.value, details.value, amount.valueAsNumber) // without Tuples
        doc = new Payment(...values)    // with Tuples
    }
    list.render(doc, type.value, 'end')
})


// GENERICS

// <T extends object> or <T extends {name: string}>
const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid }
}

let documentOne = addUID({ name: 'yoshi', age: 40 })
// must include {name : string} , but can also add others key propery (age)

// let documenTwo = addUID('hello') // this will error, cause no { name: string } in the params

console.log({ documentOne });

// with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string,
    data: T;
}

const documentThree: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
}

const documentFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'blabla',
    data: ['oreo', 'banana', 'strawberry']
}

console.log({ documentThree, documentFour });

// ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface ResourceEnum<T> {
    uid: number;
    resourceType: ResourceType,
    data: T
}

const documentFive: ResourceEnum<object> = {
    uid: 5,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' },
}

const documentSix: ResourceEnum<object> = {
    uid: 6,
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi' }
}

console.log({ documentFive, documentSix });

// tuples
let tup: [string, number, boolean] = ['ryu', 25, true]
tup[0] = 'ken'
tup[1] = 30
