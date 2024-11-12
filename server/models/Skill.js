const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Skill extends Model {}

Skill.init(
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
    associated_attribute: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "skill",
  }
);

module.exports = Skill;
