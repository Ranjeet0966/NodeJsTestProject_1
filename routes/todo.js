

const express = require("express");
const todoController = require("../controllers/todo");

const router = express.Router();

router.post("/todo/add-todo", todoController.postAddTodo); // Corrected route path

router.get("/todo/get-todos", todoController.getAllTodo); // Corrected route path

router.delete("/todo/delete-todo/:id", todoController.deleteTodo); // Corrected route path

module.exports = router;
