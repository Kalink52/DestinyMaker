const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Character_Features extends Model {}

Character_Features.init(
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
    feature_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "feature",
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "character_feature",
  }
);

module.exports = Character_Features;
