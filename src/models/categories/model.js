'use strict';

const categoryModel = (sequelize, DataTypes) => sequelize.define('Categories', {
  name: { type: DataTypes.STRING, required: true },
});

module.exports = categoryModel;
