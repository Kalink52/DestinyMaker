const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Attribute extends Model {}

Attribute.init(
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
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "attribute",
  }
);

module.exports = Attribute;
