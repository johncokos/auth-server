'use strict';

const todoModel = (sequelize, DataTypes) => sequelize.define('Todo', {
  task: { type: DataTypes.STRING, required: true },
  assignee: { type: DataTypes.STRING, required: true },
  difficulty: { type: DataTypes.NUMBER, required: true },
  complete: { type: DataTypes.BOOLEAN, required: true, defaultValue: false}
});

module.exports = todoMmodel;
