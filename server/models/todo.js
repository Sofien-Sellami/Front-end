const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: { type: String },
  description: { type: String },
  deadline: { type: Date },
});

module.exports = mongoose.model("todo", todoSchema);
