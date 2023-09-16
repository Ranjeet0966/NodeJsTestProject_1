

const express = require("express");
const todoController = require("../controllers/todo");

const router = express.Router();

router.post("/todo/add-todo", todoController.postAddTodo);

router.get("/todo/get-todos", todoController.getAllTodo);

router.delete("/todo/delete-todo/:id", todoController.deleteTodo);

module.exports = router;
