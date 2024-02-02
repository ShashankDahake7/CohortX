// Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.

// interface User {
//     firstName: string;
//     lastName: string;
//     email?: string; // optional
//     age: number;
// }

// function isLegal(user: User) {
//     if (user.age > 18) {
//         return true
//     }
//     else {
//         return false;
//     }
// }

// function greet(user: User) {
//     console.log("Hey " + user.firstName);
// }

// isLegal({
//     firstName: "Shashank",
//     lastName: "D",
//     email: "email@gmail.com",
//     age: 19,
// })

// greet({
//     firstName: "Shashank",
//     lastName: "D",
//     // email: "email@gmail.com",
//     age: 19,
// })

// 2. Implementing interfaces
// Interfaces have another special property. You can implement interfaces as a class.

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

const e = new Employee("Shashank", 19);
console.log(e.name);
// console.log(e.greet("Hey Shashank"));