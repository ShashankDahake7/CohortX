// types let you aggregate data together.
// type User = {
// 	firstName: string;
// 	lastName: string;
// 	age: number
// }

// 1. Unions
// Let’s say you want to print the id of a user, which can be a number or a string.

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
    console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

// 2. Intersection
// What if you want to create a type that has every property of multiple types/ interfaces

type Employee = {
    name: string;
    startDate: Date;
};

type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    name: "Shashank",
    startDate: new Date(),
    department: "Software developer"
};

// What is the difference betweeen Types and Interfaces

// 1] Interfaces can't express unions, mapped types, or conditional types. Type aliases can express any type.
// 2] Interfaces can use extends, types can't.
// 3] When you're working with objects that inherit from each other, use interfaces. extends makes TypeScript's type checker run slightly faster than using &.
// 4] Interfaces with the same name in the same scope merge their declarations, leading to unexpected bugs.
// 5] Type aliases have an implicit index signature of Record<PropertyKey, unknown>, which comes up occasionally.