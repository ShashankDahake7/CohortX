import { describe, expect, it } from "vitest";
import { app } from "..";
import request from "supertest";

describe("POST /sum", () => {
    it("should sum add 2 numbers", async () => {
        const { status, body } = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 3, id: expect.any(Number) });
    });
})

// beforeEach
// If you want to clear the DB between tests/descibe blocks, you can use the beforeEach function

// import { beforeEach, describe, expect, it } from "vitest";
// import { app } from "..";
// import request from "supertest";
// import resetDb from "./helpers/reset-db";

// describe("POST /sum", () => {
//     beforeEach(async () => {
//         console.log("clearing db");
//         await resetDb();
//     });

//     it("should sum add 2 numbers", async () => {
//         const { status, body } = await request(app).post('/sum').send({
//             a: 1,
//             b: 2
//         })
//         expect(status).toBe(200);
//         expect(body).toEqual({ answer: 3, id: expect.any(Number) });
//     });

//     it("should sum add 2 negative numbers", async () => {
//         const { status, body } = await request(app).post('/sum').send({
//             a: -1,
//             b: -2
//         })
//         expect(status).toBe(200);
//         expect(body).toEqual({ answer: -3, id: expect.any(Number) });
//     });
// })


// beforeAll
// If you want certain code to run before all the tests (but not before every individual test), you can use the beforeAll function

// import { beforeAll, beforeEach, describe, expect, it } from "vitest";
// import { app } from "..";
// import request from "supertest";
// import resetDb from "./helpers/reset-db";

// describe("POST /sum", () => {
//     beforeAll(async () => {
//         console.log("clearing db");
//         await resetDb();
//     });

//     it("should sum add 2 numbers", async () => {
//         const { status, body } = await request(app).post('/sum').send({
//             a: 1,
//             b: 2
//         })
//         expect(status).toBe(200);
//         expect(body).toEqual({ answer: 3, id: expect.any(Number) });
//     });

//     it("should sum add 2 negative numbers", async () => {
//         const { status, body } = await request(app).post('/sum').send({
//             a: -1,
//             b: -2
//         })
//         expect(status).toBe(200);
//         expect(body).toEqual({ answer: -3, id: expect.any(Number) });
//     });
// })