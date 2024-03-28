// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// Create, Update
// async function insertUser(username: string, password: string, firstName: string, lastName: string, email: string){
//     const response = await prisma.user.create({
//         data : {
//             username,
//             password,
//             firstName,
//             lastName,
//             email
//         }
//     });
//     console.log(response);
// }

// insertUser('sd7', 'ssd', 'shashank', 'd', 'sahan@gmail.com');


// Relationship

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create Todo
// async function createTodo(userId: number, title: string, description: string) {
//     const todo = await prisma.todo.create({
//         data: {
//             title,
//             description,
//             userId
//         },
//     });
//     console.log(todo);

// }
// createTodo(1, "go to gym", "go to gym and do 10 pushups");

// getTodo
// async function getTodos(userId: number,) {
//     const todos = await prisma.todo.findMany({
//         where: {
//             userId: userId,
//         },
//     });
//     console.log(todos);
// }
// getTodos(1);

// getTodoAndUserDetails
// 1. Bad Solution
// async function getTodosAndUserDetails(userId: number) {
//     const user = await prisma.user.findUnique({
//         where: {
//             id: userId
//         }
//     });
//     const todos = await prisma.todo.findMany({
//         where: {
//             userId: userId,
//         }
//     });
//     console.log(todos);
//     console.log(user)
// }
// getTodosAndUserDetails(1);

// 2. Good Solution
async function getTodosAndUserDetails(userId: number,) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    });
    console.log(todos);
}
getTodosAndUserDetails(1);