'use strict';

const todoModel = (sequelize, DataTypes) => sequelize.define('Todo', {
  task: { type: DataTypes.STRING, required: true },
  assignee: { type: DataTypes.STRING, required: true },
  difficulty: { type: DataTypes.INTEGER, required: true },
  complete: { type: DataTypes.BOOLEAN, required: true, defaultValue: false}
});

module.exports = todoModel;
