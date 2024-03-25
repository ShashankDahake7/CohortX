"use strict";
// Create 
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
// import { Client } from "pg";
// const client = new Client({
//     connectionString: "postgresql://postgres:<new_password>@localhost/postgres"
// });
// async function createAddressesTable() {
//     try {
//         await client.connect();
//         const result = await client.query(`
//             CREATE TABLE addresses (
//                 id SERIAL PRIMARY KEY,
//                 user_id INTEGER NOT NULL,
//                 city VARCHAR(100) NOT NULL,
//                 country VARCHAR(100) NOT NULL,
//                 street VARCHAR(255) NOT NULL,
//                 pincode VARCHAR(20),
//                 created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//                 FOREIGN KEY (user_id) REFERENCES users2(id) ON DELETE CASCADE
//             );
//         `);
//         console.log("Table created successfully:", result);
//     } catch (error) {
//         console.error("Error creating table:", error);
//     } finally {
//         await client.end(); // Close the connection when done
//     }
// }
// createAddressesTable();
// Insert
// import { Client } from 'pg';
// // Define types for the function parameters
// type AddressParams = {
//     user_id: number;
//     city: string;
//     country: string;
//     street: string;
//     pincode: string;
// };
// async function insertAddress({ user_id, city, country, street, pincode }: AddressParams) {
//     const client = new Client({
//         host: 'localhost',
//         port: 5432,
//         database: 'postgres',
//         user: 'postgres',
//         password: 'mysecretpassword',
//     });
//     try {
//         await client.connect();
//         const insertQuery = "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)";
//         const values = [user_id, city, country, street, pincode];
//         const res = await client.query(insertQuery, values as any);
//         console.log('Insertion success:', res.rowCount); // Log after getting the result
//     } catch (err) {
//         console.error('Error during the insertion:', err);
//     } finally {
//         await client.end();
//     }
// }
// // Call the insertAddress function with the provided values
// insertAddress({ user_id: 1, city: 'New York', country: 'USA', street: '123 Broadway St', pincode: '10001' });
// Transactions
// import { Client } from 'pg';
// // Define a function to insert a new user into the users2 table
// async function insertUser(username: string, email: string, password: string) {
//   const client = new Client({
//     host: 'localhost',
//     port: 5432,
//     database: 'postgres',
//     user: 'postgres',
//     password: 'mysecretpassword',
//   });
//   try {
//     await client.connect(); // Ensure client connection is established
//     // Query to insert a new user into the users2 table
//     const query = `
//       INSERT INTO users2 (username, email, password)
//       VALUES ($1, $2, $3)
//     `;
//     const values = [username, email, password];
//     const result = await client.query(query, values);
//     console.log('User inserted successfully:', result.rowCount); // Output insertion result
//   } catch (error) {
//     console.error('Error inserting user:', error);
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }
// // Call the function to insert a new user
// insertUser('john_doe', 'john_doe1@example.com', 'securepassword123');
// import { Client } from 'pg';
// // Define a function to insert an address into the addresses table
// async function insertAddress(city: string, country: string, street: string, pincode: string) {
//   const client = new Client({
//     host: 'localhost',
//     port: 5432,
//     database: 'postgres',
//     user: 'postgres',
//     password: 'mysecretpassword',
//   });
//   try {
//     await client.connect(); // Ensure client connection is established
//     // Get the most recently obtained value from the users_id_seq sequence
//     const userIdQuery = 'SELECT currval(\'users_id_seq\')';
//     const userIdResult = await client.query(userIdQuery);
//     const userId = userIdResult.rows[0].currval;
//     // Query to insert an address into the addresses table
//     const query = `
//       INSERT INTO addresses (user_id, city, country, street, pincode)
//       VALUES ($1, $2, $3, $4, $5)
//     `;
//     const values = [userId, city, country, street, pincode];
//     const result = await client.query(query, values);
//     console.log('Address inserted successfully:', result.rowCount); // Output insertion result
//   } catch (error) {
//     console.error('Error inserting address:', error);
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }
// // Call the function to insert an address
// insertAddress('New York', 'USA', '123 Broadway St', '10001');
const pg_1 = require("pg");
function insertUserAndAddress(username, email, password, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            host: 'localhost',
            port: 5432,
            database: 'postgres',
            user: 'postgres',
            password: 'mysecretpassword',
        });
        try {
            yield client.connect();
            // Start transaction
            yield client.query('BEGIN');
            // Insert user
            const insertUserText = `
            INSERT INTO users2 (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id;
        `;
            const userRes = yield client.query(insertUserText, [username, email, password]);
            const userId = userRes.rows[0].id;
            // Insert address using the returned user ID
            const insertAddressText = `
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
        `;
            yield client.query(insertAddressText, [userId, city, country, street, pincode]);
            // Commit transaction
            yield client.query('COMMIT');
            console.log('User and address inserted successfully');
        }
        catch (err) {
            yield client.query('ROLLBACK'); // Roll back the transaction on error
            console.error('Error during transaction, rolled back.', err);
            throw err;
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
// Example usage
insertUserAndAddress('johndoe', 'john.doe@example.com', 'securepassword123', 'New York', 'USA', '123 Broadway St', '10001');
