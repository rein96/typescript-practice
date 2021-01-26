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

// The DOM & Type Casting
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice2nd(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    console.log({ doc });

})

