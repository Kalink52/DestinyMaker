const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Character extends Model {}

Character.init(
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
    background_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //foreign key
      references: {
        model: "background",
        key: "id",
        unique: false,
      },
    },
    race_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //foreign key
      references: {
        model: "race",
        key: "id",
        unique: false,
      },
    },
    subrace_id: {
      type: DataTypes.INTEGER,
      //foreign key
      references: {
        model: "subrace",
        key: "id",
        unique: false,
      },
    },
    class_id: {
      type: DataTypes.INTEGER,
      //foreign key
      references: {
        model: "class",
        key: "id",
        unique: false,
      },
    },
    level: {
      type: DataTypes.INTEGER,
    },
    health: {
      type: DataTypes.INTEGER,
    },
    darkvision: {
      type: DataTypes.INTEGER,
    },

    strength: {
      type: DataTypes.INTEGER,
    },
    dexterity: {
      type: DataTypes.INTEGER,
    },
    constitution: {
      type: DataTypes.INTEGER,
    },
    intelligence: {
      type: DataTypes.INTEGER,
    },
    wisdom: {
      type: DataTypes.INTEGER,
    },
    charisma: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "character",
  }
);

module.exports = Character;
