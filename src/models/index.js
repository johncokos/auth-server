'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const todoModel = require('./todo/model.js');
const categoriesModel = require('./categories/model.js');
const productsModel = require('./products/model.js');

const userModel = require('../auth/models/users.js');

const Collection = require('./data-collection.js');

const environment = process.env.NODE_ENV;
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL, {logging:false});

const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const todo = todoModel(sequelize, DataTypes);
const categories = categoriesModel(sequelize, DataTypes);
const products = productsModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  food: new Collection(food),
  clothes: new Collection(clothes),
  todo: new Collection(todo),
  categories: new Collection(categories),
  products: new Collection(products),
};
