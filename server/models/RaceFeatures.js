const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class RaceFeatures extends Model {}

RaceFeatures.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    race_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "race",
        key: "id",
      },
    },
    feature_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "feature",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "race_features",
  }
);

module.exports = RaceFeatures;
