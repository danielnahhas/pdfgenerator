"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  store.init(
    {
      ref: DataTypes.STRING,
      category: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      standard: DataTypes.INTEGER,
      deviation: DataTypes.INTEGER,
      na_points: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Store",
    }
  );
  return store;
};
