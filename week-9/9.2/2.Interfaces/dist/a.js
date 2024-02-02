"use strict";
// Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("Shashank", 19);
console.log(e.name);
console.log(e.greet("Hey Shashank"));
