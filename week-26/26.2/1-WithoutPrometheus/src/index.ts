import express from "express";
import { middleware } from "./middleware";

const app = express();

app.use(express.json());
app.use(middleware);

app.get("/user", (req, res) => {
    res.send({
        name: "Shashank",
        age: 20,
    });
});

app.post("/user", (req, res) => {
    const user = req.body;
    res.send({
        ...user,
        id: 1,
    });
});

app.listen(3000);