const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Background_Skill extends Model {}

Background_Skill.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    Background_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "background",
        key: "id",
      },
    },
    Skill_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "skill",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "background_skill",
  }
);

module.exports = Background_Skill;
