const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();

app.use(express.json());

// Allowing from anywhere
app.use(cors())

// app.use(cors({
//     origin:"https://localhost:5173"
// }));

app.get("/todos", async function (req, res) {
    try {
        const todos = await todo.find();
        res.json({
            todos
        });
    }
    catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).json({
            msg: "Internal Server Error",
        });
    }
});

app.post("/todo", async function (req, res) {
    try {
        const createPayload = req.body;
        const parsePayload = createTodo.safeParse(createPayload);
        if (!parsePayload.success) {
            res.status(411).json({
                msg: "You sent the wrong inputs",
            });
            return;
        }
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        });
        res.json({
            msg: "Todo created"
        });
    }
    catch (error) {
        console.error("Error creating todo:", error);
        res.status(500).json({
            msg: "Internal Server Error",
        });
    }
});

app.put("/completed", async function (req, res) {
    try {
        const updatePayload = req.body;
        const parsePayload = updateTodo.safeParse(updatePayload);
        if (!parsePayload.success) {
            res.status(411).json({
                msg: "You sent the wrong inputs",
            });
            return;
        }
        await todo.updateOne({
            _id: req.body.id
        }, {
            completed: true
        });
        res.json({
            msg: "Todo marked as completed"
        });
    }
    catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({
            msg: "Internal Server Error",
        });
    }
});

app.listen(3000, function () {
    console.log(`Server started at ${3000} port`);
});
