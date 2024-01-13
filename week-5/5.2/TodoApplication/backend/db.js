const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shashankdahake578:Z7kuiGJPdvBxBxZ6@cluster0.ay99cmk.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = { todo }
