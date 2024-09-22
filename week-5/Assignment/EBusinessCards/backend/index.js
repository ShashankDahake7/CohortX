const express = require('express');
const app = express();
const cors = require('cors');
const { Card } = require('./db');
const { createCards, updateCards } = require('./types');
app.use(express.json());
app.use(cors());

app.get('/cards', async function (req, res) {
    try {
        const cards = await Card.find();
        res.json({ cards });
    } catch (error) {
        console.error("Error fetching cards:", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

app.post('/card', async function (req, res) {
    try {
        const createPayload = req.body;
        const parsePayload = createCards.safeParse(createPayload);
        if (!parsePayload.success) {
            return res.status(400).json({
                msg: "Invalid inputs",
                errors: parsePayload.error.errors,
            });
        }

        const { name, description, linkedin, twitter, otherSocialMedia, interests } = parsePayload.data;

        await Card.create({
            name,
            description,
            linkedin,
            twitter,
            otherSocialMedia,
            interests
        });

        res.json({
            msg: "Card created successfully"
        });
    } catch (error) {
        console.error("Error creating card:", error);
        res.status(500).json({
            msg: "Internal Server Error",
        });
    }
});

app.put('/card/:id', async function (req, res) {
    try {
        const cardId = req.params.id;
        const updatePayload = req.body;
        const parsePayload = updateCards.safeParse(updatePayload);

        if (!parsePayload.success) {
            return res.status(400).json({
                msg: "Invalid inputs",
                errors: parsePayload.error.errors,
            });
        }

        const updatedCard = await Card.findByIdAndUpdate(cardId, parsePayload.data, { new: true });

        if (!updatedCard) {
            return res.status(404).json({
                msg: "Card not found",
            });
        }

        res.json({
            msg: "Card updated successfully",
            updatedCard
        });
    } catch (error) {
        console.error("Error updating card:", error);
        res.status(500).json({
            msg: "Internal Server Error",
        });
    }
});

app.delete('/card/:id', async function (req, res) {
    try {
        const cardId = req.params.id;

        const deletedCard = await Card.findByIdAndDelete(cardId);

        if (!deletedCard) {
            return res.status(404).json({
                msg: "Card not found",
            });
        }

        res.json({
            msg: "Card deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting card:", error);
        res.status(500).json({
            msg: "Internal Server Error",
        });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));