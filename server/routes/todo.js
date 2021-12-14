const express = require("express");
const todoController = require("../controllers/Todo");

const { body, validationResult } = require("express-validator");
const TodoRouter = express.Router();

TodoRouter.route("/").get(todoController.getTodo);
TodoRouter.post(
  "/add",
  body("title").isLength({ min: 3 }),
  todoController.createTodo
);
TodoRouter.patch("/:id", todoController.updateTodo);
TodoRouter.delete("/:id", todoController.DeleteTodo);

module.exports = TodoRouter;
