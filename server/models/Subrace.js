const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Subrace extends Model {}

Subrace.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    race_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "race",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    additional_speed: {
      type: DataTypes.INTEGER,
    },
    additional_dark_vision: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "subrace",
  }
);

module.exports = Subrace;
