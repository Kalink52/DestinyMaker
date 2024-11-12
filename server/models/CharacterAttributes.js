const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Character_Attributes extends Model {}

Character_Attributes.init(
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
    attribute_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "attribute",
        key: "id",
      },
      allowNull: false,
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "character_attributes",
  }
);

module.exports = Character_Attributes;
