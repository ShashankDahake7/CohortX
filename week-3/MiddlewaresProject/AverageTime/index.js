const express = require("express");
const app = express();

const requestTimes = [];

app.use((req, res, next) => {
    const start = process.hrtime();
    res.on("finish", () => {
        const end = process.hrtime(start);
        const elapsedTime = (end[0] * 1000 + end[1] / 1e6).toFixed(2);
        requestTimes.push(parseFloat(elapsedTime));
    });
    next();
});

app.use((req, res) => {
    res.send("Hello, World!");
});

app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
});

function calculateAverageTime() {
    const totalRequests = requestTimes.length;
    const totalTime = requestTimes.reduce((acc, time) => acc + time, 0);
    const averageTime = totalRequests > 0 ? (totalTime / totalRequests).toFixed(2) : 0;
    console.log(`Average request handling time: ${averageTime} ms`);
}

setInterval(calculateAverageTime, 60000);