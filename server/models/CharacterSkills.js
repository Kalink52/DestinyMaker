const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Character_Skills extends Model {}

Character_Skills.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    character_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "character",
        key: "id",
      },
      allowNull: false,
    },
    skill_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "skill",
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "character_skills",
  }
);

module.exports = Character_Skills;
