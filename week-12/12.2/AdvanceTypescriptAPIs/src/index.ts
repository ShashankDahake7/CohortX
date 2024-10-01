// 1. Pick - The Pick utility type is part of TypeScript's mapped types, which enable you to create new types based on the keys of an existing type. The syntax for Pick is as follows: Pick<Type, Keys>
// - `Type`: The original type you want to pick properties from.
// - `Keys`: The keys (property names) you want to pick from the `Type`, separated by `|` (the union operator).

// interface User {
//     id: string,
//     name: string,
//     age: string,
//     email: string,
//     password: string
// }

// Without Pick
// interface UpdateProps{
//     name: string,
//     age: string,
//     password: string
// }

// With Pick
// type UpdateProps = Pick<User, 'name' | 'age' | 'password'>

// function updateUser(updatedProps: UpdateProps) {
//     // hit the database to update the user
// }

// 2. Partial - The `Partial` utility type takes a single type argument and produces a type with all the properties of the provided type set to optional. Here's the syntax for using `Partial`: Partial<Type>
// - `Type`: The original type you want to convert to a type with optional properties.

// interface User {
//     id: string,
//     name: string,
//     age: string,
//     email: string,
//     password: string
// }

// Without Partial
// interface UpdateProps {
//     name?: string,
//     age?: string,
//     password?: string
// }

// With Partial
// type UpdateProps = Pick<User, 'name' | 'age' | 'password'>
// type UpdatePropsOptional = Partial<UpdateProps>

// function updateUser(updatedProps: UpdatePropsOptional) {
//     // hit the database to update the user
// }

// 3. Readonly - The `Readonly` utility type takes a type `T` and returns a type with all properties of `T` set as read-only. Here's the basic syntax: Readonly<Type>
// - `Type`: The original type you want to convert to a read-only version.

// Without Readonly
// const obj = {
//     name: "Shashank",
//     age: 20,
//     country: 'India'
// }
// obj.name = "King" // can change but cannot change whole obj

// With Readonly
// type User = {
//     name: string,
//     age: number,
// }
// const user: Readonly<User> = {
//     name: 'Shashank',
//     age: 20
// }
// user.age = 21 // cannot be done

// 4.Record & Map - 
// Record - The `Record<K, T>` utility type is used to construct a type with a set of properties `K` of a given type `T`. It provides a cleaner and more concise syntax for typing objects when you know the shape of the values but not the keys in advance.

// interface User {
//     id: string,
//     name: string
// }

// Without Record
// type Users = { [key: string]: User };
// const users: Users = {
//     'abc123': {id:'abc123', name:'Shashank'},
//     'xyz456': {id:'xyz456', name:'King'},
// };

// With Record
// type Users = Record<string, User>;
// const users: Users = {
//     'abc123': { id: 'abc123', name: 'Shashank' },
//     'xyz456': { id: 'xyz456', name: 'King' },
// };

// Map - The Map object in TypeScript (inherited from JavaScript) represents a collection of key-value pairs where both the keys and values can be of any type. Maps remember the original insertion order of the keys, which is a significant difference from plain JavaScript objects.

// interface User {
//     id: string;
//     name: string;
// }
// const usersMap = new Map<string, User>();
// // Add users to the map using .set
// usersMap.set('abc123', { id: 'abc123', name: 'Shashank' });
// usersMap.set('xyz456', { id: 'xyz456', name: 'King' });
// // Accessing a value using .get
// console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'Shashank' }

// ### Record vs. Map
// - **Use `Record` when**: You are working with objects that have a fixed shape for values and string keys. It's ideal for typing object literals with known value types.
// - **Use `Map` when**: You need more flexibility with keys (not just strings or numbers), or you need to maintain the insertion order of your keys. Maps also provide better performance for large sets of data, especially when frequently adding and removing key-value pairs.
// > Both **`Record`** and **`Map`** enhance TypeScript's ability to work with collections of data in a type-safe manner, each offering unique benefits suited to different scenarios in application development.

// 5.Exclude - The `Exclude` utility type in TypeScript is used to construct a type by excluding from a union type certain members that should not be allowed. It's particularly useful when you want to create a type that is a subset of another type, with some elements removed.
// The `Exclude<T, U>` utility type takes two arguments:
// - `T`: The original union type from which you want to exclude some members.
// - `U`: The union type containing the members you want to exclude from `T`.
// The result is a type that includes all members of `T` that are not assignable to `U`.

// type EventType = 'click' | 'scroll' | 'mousemove'
// type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'
// // Function that accepts only 'click' and 'mousemove' events
// const handleEvent = (event: ExcludeEvent) => {
//     console.log(`Handling event: ${event}`);
// };
// handleEvent('click'); // OK
// handleEvent('scroll'); // Error: Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent'.

// 6.Type Inferences In Zod - Type inference in Zod is a powerful feature that allows TypeScript to automatically determine the type of data validated by a Zod schema.

// import { z } from 'zod';
// import express from "express";

// const app = express();
// app.use(express.json()); // Middleware to parse JSON bodies

// // Define the schema for profile update
// const userProfileSchema = z.object({
//     name: z.string().min(1, { message: "Name cannot be empty" }),
//     email: z.string().email({ message: "Invalid email format" }),
//     age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
// });

// app.put("/user", (req, res) => {
//     const result = userProfileSchema.safeParse(req.body);
//     if (!result.success) {
//         res.status(400).json({ error: result.error });
//         return;
//     }
//     // Type of updateBody is inferred from userProfileSchema
//     const updateBody = result.data;
//     // update database here
//     res.json({
//         message: "User updated",
//         updateBody
//     });
// });

// app.listen(3000, () => console.log("Server running on port 3000"));

// In this example, `userProfileSchema.safeParse(req.body)` validates the request body against the `userProfileSchema`. The `safeParse` method returns an object that includes a `success` boolean and, on success, a `data` property containing the validated data.
// ### Assigning a Type to `updateBody`
// Thanks to Zod's type inference, the type of `updateBody` is automatically inferred to be:
// ```
// {
//   name: string;
//   email: string;
//   age?: number;
// }
// ```
// This inferred type is derived directly from the `userProfileSchema` definition. If you try to access a property on `updateBody` that isn't defined in the schema, TypeScript will raise a compile-time error, providing an additional layer of type safety.

// import { z } from 'zod';
// import express from "express";

// const app = express();
// app.use(express.json()); // Middleware to parse JSON bodies

// // Define the schema for profile update
// const userProfileSchema = z.object({
//     name: z.string().min(1, { message: "Name cannot be empty" }),
//     email: z.string().email({ message: "Invalid email format" }),
//     age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
// });

// type FinalUserSchema = z.infer<typeof userProfileSchema>

// app.put("/user", (req, res) => {
//     const {success} = userProfileSchema.safeParse(req.body);
//     const updateBody: FinalUserSchema = req.body;
//     if (!success) {
//         res.status(411).json();
//         return;
//     }
//     res.json({
//         message: "User updated",
//         updateBody
//     });
// });

// app.listen(3000, () => console.log("Server running on port 3000"));