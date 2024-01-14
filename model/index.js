var Sequelize = require("sequelize");
var sequelize = require("../dbConfig").sequelize;

module.exports = {
  file: require('./file')(Sequelize, sequelize, Sequelize.DataTypes)
}