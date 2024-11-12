const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Character_Spells extends Model {}

Character_Spells.init(
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
    spell_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "spell",
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "character_spells",
  }
);

module.exports = Character_Spells;
