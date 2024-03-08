import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Write a function that let’s you insert data in the Users table.

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//     const res = await prisma.user.create({
//         data: {
//             username,
//             password,
//             firstName,
//             lastName
//         }
//     })
//     console.log(res);
// }
// insertUser("admin1", "123456", "King", "D")

// Write a function that let’s you update data in the Users table.

// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }
// async function updateUser(username: string, { firstName, lastName }: UpdateParams) {
//     const res = await prisma.user.update({
//         where: { username },
//         data: {
//             firstName,
//             lastName
//         }
//     });
//     console.log(res);
// }
// updateUser("admin1", { firstName: "Krsna", lastName: "Kaul" })

// Write a function that let’s you fetch the details of a user given their email

// async function getUser(username: string) {
//     const user = await prisma.user.findFirst({
//         where: {
//             username: username
//         }
//     })
//     console.log(user);
// }
// getUser("admin1");