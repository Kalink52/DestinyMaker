const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Class extends Model {}

Class.init(
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
    base_health: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    health_per_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    spellcasting_ability: {
      type: DataTypes.STRING,
    },
    proficiencies: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "class",
  }
);

module.exports = Class;
