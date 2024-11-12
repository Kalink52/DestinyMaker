const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Character_Proficiencies extends Model {}

Character_Proficiencies.init(
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
    proficiency_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "proficiency",
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "character_proficiencies",
  }
);

module.exports = Character_Proficiencies;
