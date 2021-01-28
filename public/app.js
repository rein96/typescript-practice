const anchor = document.querySelector('a');
// console.log(anchor.href) // this will error
// solution 1
if (anchor)
    console.log(anchor.href);
// solution 2
const anchorSolutionTwo = document.querySelector('a'); // ! => force ts it will return something
console.log(anchorSolutionTwo.href);
// solution 3
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href); // optional chaining !
// classes 
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work for website', 250);
const invTwo = new Invoice('luigi', 'work for website', 1000);
let invoices = []; // Force array of object must be Invoice class
invoices.push(invOne);
invoices.push(invTwo);
console.log({ invOne, invTwo });
//////////////////
import { Invoice2nd } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
const invOne2nd = new Invoice2nd('mario', 'work for website', 250);
const invTwo2nd = new Invoice2nd('luigi', 'work for website', 1000);
console.log({ invOne2nd, invTwo2nd });
const me = {
    name: 'rein',
    age: 40,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log(`hello ${person.name}`);
};
greetPerson(me);
// Interfaces with classes
// import { Invoice2nd } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice2nd('yoshi', 'web work', 400);
docTwo = new Payment('mario', 'plumbing work', 500);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log({ docs });
// THE REAL APP LOGIC
// The DOM & Type Casting
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul'); // class="item-list"
const list = new ListTemplate(ul); // ul -> container parameter constructor
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [toFrom.value, details.value, amount.valueAsNumber];
    // console.log('values', values);
    // console.log('...values', ...values);
    let doc;
    if (type.value === 'invoice') {
        // doc = new Invoice2nd(toFrom.value, details.value, amount.valueAsNumber)  // without Tuples
        doc = new Invoice2nd(...values); // with Tuples
    }
    else {
        // doc = new Payment(toFrom.value, details.value, amount.valueAsNumber) // without Tuples
        doc = new Payment(...values); // with Tuples
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
// <T extends object> or <T extends {name: string}>
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let documentOne = addUID({ name: 'yoshi', age: 40 });
// must include {name : string} , but can also add others key propery (age)
// let documenTwo = addUID('hello') // this will error, cause no { name: string } in the params
console.log({ documentOne });
const documentThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
};
const documentFour = {
    uid: 2,
    resourceName: 'blabla',
    data: ['oreo', 'banana', 'strawberry']
};
console.log({ documentThree, documentFour });
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const documentFive = {
    uid: 5,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' },
};
const documentSix = {
    uid: 6,
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi' }
};
console.log({ documentFive, documentSix });
// tuples
let tup = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;
