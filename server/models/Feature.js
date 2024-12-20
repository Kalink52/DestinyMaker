const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Feature extends Model {}

Feature.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    value: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "feature",
  }
);

module.exports = Feature;
