

const Todo = require("../models/todo");

exports.postAddTodo = async (req, res, next) => {
  try {
    const todoName = req.body.todoName;
    const description = req.body.description;

    const todo = await Todo.create({
      todoName: todoName,
      description: description,
    });

    res.json(todo); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" }); 
  }
};

exports.getAllTodo = async (req, res, next) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findByPk(id);
    
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    await todo.destroy();
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
