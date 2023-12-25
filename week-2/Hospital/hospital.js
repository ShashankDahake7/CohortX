const express = require('express')
// const bodyParser = require('body-parser')
const app = express()
app.use(express.json())

const users = [{
    name: "Shashank",
    kidneys: [{
        healthy: true
    }]
}];

app.get("/", (req, res) => {
    const shashankKidneys = users[0].kidneys;
    const numberOfKidneys = shashankKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < numberOfKidneys; i++) {
        if (shashankKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        shashankKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})

app.put("/", (req, res) => {
    if (areAllKidneysHealthy()) {
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.json({
            msg: "Done"
        });
    } 
    else {
        res.status(412).json({
            msg: "All kidneys are already healthy"
        });
    }
});

function areAllKidneysHealthy() {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            return false;
        }
    }
    return true;
}

app.delete("/", (req, res) => {
    if (isThereOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "Done"
        })
    }
    else {
        res.status(411).json({
            msg: "You have no unhealthy kidneys"
        })
    }
})

function isThereOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3000, () => {
    console.log("Starting the server");
})