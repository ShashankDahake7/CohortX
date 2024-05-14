import express from "express"
import { BACKEND_URL } from "@repo/common/config"

const app = express();

console.log(BACKEND_URL);

app.get("/", (req, res) => {
    res.json({
        message: "Hello world"
    })
})

app.listen(3000);