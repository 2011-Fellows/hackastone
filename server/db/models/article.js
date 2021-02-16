const Sequelize = require('sequelize');
const db = require('../db');

const Article = db.define('article', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
  },
  date: {
    type: Sequelize.DATE,
  },
  category: {
    type: Sequelize.ENUM('algo', 'project', 'technology'),
  },
  likes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  dislikes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Article;
