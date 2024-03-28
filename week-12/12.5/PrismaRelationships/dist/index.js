"use strict";
// import { PrismaClient } from "@prisma/client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield prisma.todo.findMany({
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
    });
}
getTodosAndUserDetails(1);
