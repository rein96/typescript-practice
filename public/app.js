"use strict";
var anchor = document.querySelector('a');
// console.log(anchor.href) // this will error
// solution 1
if (anchor)
    console.log(anchor.href);
// solution 2
var anchorSolutionTwo = document.querySelector('a'); // ! => force ts it will return something
console.log(anchorSolutionTwo.href);
// solution 3
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href); // optional chaining !
// The DOM & Type Casting
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log({ typeValue: type.value, toFromValue: toFrom.value, detailsValue: details.value, amountValue: amount.valueAsNumber });
});
