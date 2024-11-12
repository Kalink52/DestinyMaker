const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Spell extends Model {}

Spell.init(
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
    level: {
      type: DataTypes.INTEGER,
    },
    class_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "class",
        key: "id",
      },
    },
    school_of_magic: {
      type: DataTypes.STRING,
    },
    casting_time: {
      type: DataTypes.STRING,
    },
    range: {
      type: DataTypes.STRING,
    },
    components: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "spell",
  }
);

module.exports = Spell;
