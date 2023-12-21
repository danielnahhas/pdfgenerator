'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class performance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  performance.init({
    title: DataTypes.STRING,
    num: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Performance',
  });
  return performance;
};