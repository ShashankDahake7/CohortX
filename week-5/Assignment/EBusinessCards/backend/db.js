const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    interests: {
        type: [String],
        required: true
    },
    linkedin: {
        type: String,
        required: true
    },
    twitter: {
        type: String,
        required: true
    },
    otherSocialMedia: {
        url: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = { Card };
