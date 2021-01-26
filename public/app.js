import { Invoice2nd } from './classes/Invoice.js';
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
// The DOM & Type Casting
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log({ typeValue: type.value, toFromValue: toFrom.value, detailsValue: details.value, amountValue: amount.valueAsNumber });
});
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
const invOne2nd = new Invoice2nd('mario', 'work for website', 250);
const invTwo2nd = new Invoice2nd('luigi', 'work for website', 1000);
console.log({ invOne2nd, invTwo2nd });
