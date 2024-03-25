// Create

// import { Client } from "pg";
// const client = new Client({
//     connectionString: ""
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

// import { Client } from 'pg';

// async function insertUserAndAddress(
//     username: string,
//     email: string,
//     password: string,
//     city: string,
//     country: string,
//     street: string,
//     pincode: string
// ) {
//     const client = new Client({
//         host: 'localhost',
//         port: 5432,
//         database: 'postgres',
//         user: 'postgres',
//         password: 'mysecretpassword',
//     });

//     try {
//         await client.connect();

//         // Start transaction
//         await client.query('BEGIN');

//         // Insert user
//         const insertUserText = `
//             INSERT INTO users2 (username, email, password)
//             VALUES ($1, $2, $3)
//             RETURNING id;
//         `;
//         const userRes = await client.query(insertUserText, [username, email, password]);
//         const userId = userRes.rows[0].id;

//         // Insert address using the returned user ID
//         const insertAddressText = `
//             INSERT INTO addresses (user_id, city, country, street, pincode)
//             VALUES ($1, $2, $3, $4, $5);
//         `;
//         await client.query(insertAddressText, [userId, city, country, street, pincode]);

//         // Commit transaction
//         await client.query('COMMIT');

//         console.log('User and address inserted successfully');
//     } catch (err) {
//         await client.query('ROLLBACK'); // Roll back the transaction on error
//         console.error('Error during transaction, rolled back.', err);
//         throw err;
//     } finally {
//         await client.end(); // Close the client connection
//     }
// }

// // Example usage
// insertUserAndAddress(
//     'johndoe',
//     'john.doe@example.com',
//     'securepassword123',
//     'New York',
//     'USA',
//     '123 Broadway St',
//     '10001'
// );



// JOINS

// Approach 1 (Bad)
// -- Query 1: Fetch user's details
// SELECT id, username, email
// FROM users
// WHERE id = YOUR_USER_ID;

// import { Client } from 'pg';
// Async function to fetch user details and address separately
// async function getUserDetailsAndAddressSeparately(userId: string) {
//     const client = new Client({
//         host: 'localhost',
//         port: 5432,
//         database: 'postgres',
//         user: 'postgres',
//         password: 'mysecretpassword',
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

// -- Query 2: Fetch user's address
// SELECT city, country, street, pincode
// FROM addresses
// WHERE user_id = YOUR_USER_ID;

// Approach 2 (using joins)
// SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// JOIN addresses ON users.id = addresses.user_id
// WHERE users.id = '1';
// SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
// FROM users u
// JOIN addresses a ON u.id = a.user_id
// WHERE u.id = YOUR_USER_ID;

// import { Client } from 'pg';
// Async function to fetch user data and their address together
// async function getUserDetailsWithAddress(userId: string) {
//     const client = new Client({
//         host: 'localhost',
//         port: 5432,
//         database: 'postgres',
//         user: 'postgres',
//         password: 'mysecretpassword',
//     });

//     try {
//         await client.connect();
//         const query = `
//             SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
//             FROM users u
//             JOIN addresses a ON u.id = a.user_id
//             WHERE u.id = $1
//         `;
//         const result = await client.query(query, [userId]);

//         if (result.rows.length > 0) {
//             console.log('User and address found:', result.rows[0]);
//             return result.rows[0];
//         } else {
//             console.log('No user or address found with the given ID.');
//             return null;
//         }
//     } catch (err) {
//         console.error('Error during fetching user and address:', err);
//         throw err;
//     } finally {
//         await client.end();
//     }
// }
// getUserDetailsWithAddress("1");


// Types of Joins
// 1. INNER JOIN
// Returns rows when there is at least one match in both tables. If there is no match, the rows are not returned. It's the most common type of join.
// Use Case: Find All Users With Their Addresses. If a user hasn’t filled their address, that user shouldn’t be returned
// SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// INNER JOIN addresses ON users.id = addresses.user_id;
// 2. LEFT JOIN
// Returns all rows from the left table, and the matched rows from the right table.
// Use case - To list all users from your database along with their address information (if they've provided it), you'd use a LEFT JOIN. Users without an address will still appear in your query result, but the address fields will be NULL for them.
// SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// LEFT JOIN addresses ON users.id = addresses.user_id;
// 3. RIGHT JOIN
// Returns all rows from the right table, and the matched rows from the left table.
// Use case - Given the structure of the database, a RIGHT JOIN would be less common since the addresses table is unlikely to have entries not linked to a user due to the foreign key constraint. However, if you had a situation where you start with the addresses table and optionally include user information, this would be the theoretical use case.
// SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// RIGHT JOIN addresses ON users.id = addresses.user_id;
// 4. FULL JOIN
// Returns rows when there is a match in one of the tables. It effectively combines the results of both LEFT JOIN and RIGHT JOIN.
// Use case - A FULL JOIN would combine all records from both users and addresses, showing the relationship where it exists. Given the constraints, this might not be as relevant because every address should be linked to a user, but if there were somehow orphaned records on either side, this query would reveal them.
// SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// FULL JOIN addresses ON users.id = addresses.user_id;