const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Item extends Model {}

Item.init(
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
    type: {
      type: DataTypes.STRING,
    },
    class_restrictions: {
      type: DataTypes.STRING,
    },
    base_damage: {
      type: DataTypes.STRING,
    },
    armor_class_bonus: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "item",
  }
);

module.exports = Item;
