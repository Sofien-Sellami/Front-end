var Todo = require("../models/todo");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");

const getTodo = async (req, res) => {
  try {
    const allTodos = await Todo.find();
    res.status(200).json(allTodos);
  } catch (error) {
    res.status(404).json({ message: error.message() });
  }
};

const createTodo = async (req, res) => {
  var newTodo = new Todo();
  newTodo.title = req.body.title;
  newTodo.description = req.body.description;
  newTodo.deadline = req.body.deadline;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    try {
      await newTodo.save();
      return res.status(200).json(newTodo);
    } catch (err) {
      console.error(err);
    }
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, deadline } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Task Found ! ");

  const updatedTodo = { title, description, deadline, _id: id };

  await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });
  res.json(updatedTodo);
};

const DeleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Task Found with id : ${id} ");

  await Todo.findByIdAndRemove(id);
  res.json({ message: "Task deleted successfully." });
};

module.exports = { getTodo, createTodo, updateTodo, DeleteTodo };
