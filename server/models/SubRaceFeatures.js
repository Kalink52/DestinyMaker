const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class SubraceFeatures extends Model {}

SubraceFeatures.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    subrace_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "subrace",
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
    modelName: "subrace_features",
  }
);

module.exports = SubraceFeatures;
