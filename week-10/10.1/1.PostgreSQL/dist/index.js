"use strict";
// Write a function to create a users table in your database.
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
const pg_1 = require("pg");
// const client = new Client({
//     connectionString: "postgresql://shashankdahake578:4q8oUBkSYNZl@ep-sweet-brook-a1ljqvys.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
// });
// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result);
// }
// createUsersTable();
// Create a function that let’s you insert data into a table. Make it async, make sure client.connect resolves before u do the insert
// Not Secure
// async function insertData() {
//     const client = new Client({
//         connectionString: "postgresql://shashankdahake578:4q8oUBkSYNZl@ep-sweet-brook-a1ljqvys.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
//     });
//     try {
//         await client.connect(); // Ensure client connection is established
//         const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
//         const res = await client.query(insertQuery);
//         console.log('Insertion success:', res); // Output insertion result
//     } catch (err) {
//         console.error('Error during the insertion:', err);
//     } finally {
//         await client.end(); // Close the client connection
//     }
// }
// insertData();
// More Secure
// async function insertData(username: string, email: string, password: string) {
//     const client = new Client({
//         connectionString: "postgresql://shashankdahake578:4q8oUBkSYNZl@ep-sweet-brook-a1ljqvys.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
//     });
//     try {
//         await client.connect(); // Ensure client connection is established
//         // Use parameterized query to prevent SQL injection
//         const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
//         const values = [username, email, password];
//         const res = await client.query(insertQuery, values);
//         console.log('Insertion success:', res); // Output insertion result
//     } catch (err) {
//         console.error('Error during the insertion:', err);
//     } finally {
//         await client.end(); // Close the client connection
//     }
// }
// insertData('username5', 'user5@example.com', 'user_password').catch(console.error);
// Write a function getUser that lets you fetch data from the database given a email as input.
// async function getUser(email: string) {
//     const client = new Client({
//         connectionString: "postgresql://shashankdahake578:4q8oUBkSYNZl@ep-sweet-brook-a1ljqvys.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
//     });
//     try {
//         await client.connect(); // Ensure client connection is established
//         const query = 'SELECT * FROM users WHERE email = $1';
//         const values = [email];
//         const result = await client.query(query, values);
//         if (result.rows.length > 0) {
//             console.log('User found:', result.rows[0]); // Output user data
//             return result.rows[0]; // Return the user data
//         } else {
//             console.log('No user found with the given email.');
//             return null; // Return null if no user was found
//         }
//     } catch (err) {
//         console.error('Error during fetching user:', err);
//         throw err; // Rethrow or handle error appropriately
//     } finally {
//         await client.end(); // Close the client connection
//     }
// }
// getUser('user5@example.com').catch(console.error);
// Creating addresses table
// async function createAddressesTable() {
//     const client = new Client({
//         connectionString: "postgresql://shashankdahake578:4q8oUBkSYNZl@ep-sweet-brook-a1ljqvys.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
//     });
//     try {
//         await client.connect();
//         const query = `
//             CREATE TABLE addresses (
//                 id SERIAL PRIMARY KEY,
//                 user_id INTEGER,
//                 city VARCHAR(255),
//                 country VARCHAR(255),
//                 street VARCHAR(255),
//                 pincode VARCHAR(10)
//             )
//         `;
//         const result = await client.query(query);
//         console.log("Table created successfully");
//     } catch (error) {
//         console.error('Error executing query:', error);
//     } finally {
//         await client.end();
//     }
// }
// createAddressesTable();
// Insert Address
// async function insertAddress() {
//     const client = new Client({
//         connectionString: "postgresql://shashankdahake578:4q8oUBkSYNZl@ep-sweet-brook-a1ljqvys.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
//     });
//     try {
//         await client.connect();
//         const query = `
//             INSERT INTO addresses (user_id, city, country, street, pincode)
//             VALUES (1, 'New York', 'USA', '123 Broadway St', '10001')
//         `;
//         const result = await client.query(query);
//         console.log("Inserted successfully:", result.rowCount);
//     } catch (error) {
//         console.error('Error executing query:', error);
//     } finally {
//         await client.end();
//     }
// }
// insertAddress();
// What’s hard is joining  data from two (or more) tables together.
// For example, if I ask you to fetch me a users details and  their address, what SQL would you run?
// Approach-1(bad) 
// Async function to fetch user details and address separately
// async function getUserDetailsAndAddressSeparately(userId: string) {
//     const client = new Client({
//         connectionString: "postgresql://shashankdahake578:4q8oUBkSYNZl@ep-sweet-brook-a1ljqvys.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
//     });
//     try {
//         await client.connect();
//         // Fetch user details
//         const userDetailsQuery = 'SELECT id, username, email FROM users WHERE id = $1';
//         const userDetails = await client.query(userDetailsQuery, [userId]);
//         // Fetch user address
//         const userAddressQuery = 'SELECT city, country, street, pincode FROM addresses WHERE user_id = $1';
//         const userAddress = await client.query(userAddressQuery, [userId]);
//         if (userDetails.rows.length > 0) {
//             console.log('User found:', userDetails.rows[0]);
//             console.log('Address:', userAddress.rows.length > 0 ? userAddress.rows[0] : 'No address found');
//             return { user: userDetails.rows[0], address: userAddress.rows.length > 0 ? userAddress.rows[0] : null };
//         } else {
//             console.log('No user found with the given ID.');
//             return null;
//         }
//     } catch (err) {
//         console.error('Error during fetching user and address:', err);
//         throw err;
//     } finally {
//         await client.end();
//     }
// }
// getUserDetailsAndAddressSeparately("1");
// Approach-2(using joins)
// Async function to fetch user data and their address together
function getUserDetailsWithAddress(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://shashankdahake578:4q8oUBkSYNZl@ep-sweet-brook-a1ljqvys.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
        });
        try {
            yield client.connect();
            const query = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1
        `;
            const result = yield client.query(query, [userId]);
            if (result.rows.length > 0) {
                console.log('User and address found:', result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log('No user or address found with the given ID.');
                return null;
            }
        }
        catch (err) {
            console.error('Error during fetching user and address:', err);
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
getUserDetailsWithAddress("1");
