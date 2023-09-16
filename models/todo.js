const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const Todo = sequelize.define("Todo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    todoName: {
        type: DataTypes.STRING,
        allowNull: false // You may want to make todoName required
    },
    description: {
        type: DataTypes.STRING,
        unique: true
    }
});

module.exports = Todo;