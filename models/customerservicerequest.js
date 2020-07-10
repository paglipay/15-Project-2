'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerServiceRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CustomerServiceRequest.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
      CustomerServiceRequest.belongsTo(models.Customer, {
        foreignKey: {
          allowNull: false
        }
      });
    }
  };
  CustomerServiceRequest.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CustomerServiceRequest',
  });
  return CustomerServiceRequest;
};