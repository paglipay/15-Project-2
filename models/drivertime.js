'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DriverTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DriverTime.belongsTo(models.Trip, {
        foreignKey: {
          allowNull: false
        }
      });
    }
  };
  DriverTime.init({
    action: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DriverTime',
  });
  return DriverTime;
};