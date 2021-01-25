const anchor = document.querySelector('a');

// console.log(anchor.href) // this will error

// solution 1
if (anchor) console.log(anchor.href);

// solution 2
const anchorSolutionTwo = document.querySelector('a')!; // ! => force ts it will return something
console.log(anchorSolutionTwo.href);

// solution 3
console.log(anchor?.href) // optional chaining !

// The DOM & Type Casting
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log({typeValue: type.value, toFromValue: toFrom.value, detailsValue: details.value, amountValue: amount.valueAsNumber});
    
})