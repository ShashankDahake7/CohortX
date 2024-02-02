// function getFirstElement(arr: (string | number)[]) {
//     return arr[0];
// }

// const el = getFirstElement([1, 2, 3]);
// console.log(el);

// What is the problem in this approach?
// User can send different types of values in inputs, without any type errors
// function getFirstElement(arr: (string | number)[]) {
//     return arr[0];
// }

// const el = getFirstElement([1, 2, '3']);
// console.log(el);


// Typescript isn’t able to infer the right type of the return type
// function getFirstElement(arr: (string | number)[]) {
//     return arr[0];
// }

// const el = getFirstElement(["KING", "Shashank"]);
// console.log(el.toLowerCase())

// [ ERROR ]
// Property 'toLowerCase' does not exist on type 'string | number'.
// Property 'toLowerCase' does not exist on type 'number'.
// console.log(el.toLowerCase())


// Solution - Generics
// Generics enable you to create components that work with any data type while still providing compile-time type safety.

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);
console.log(output1)
console.log(output2)

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["KING", "Shashank"]);
console.log(el.toLowerCase())