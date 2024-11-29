const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Race extends Model {}

Race.init(
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
    base_speed:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    base_darkvision: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "race",
  }
);

module.exports = Race;
