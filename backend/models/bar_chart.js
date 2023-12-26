'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bar_Chart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bar_Chart.init({
    date: DataTypes.STRING,
    Branch1: DataTypes.INTEGER,
    Branch2: DataTypes.INTEGER,
    Branch3: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bar_chart',
  });
  return Bar_Chart;
};