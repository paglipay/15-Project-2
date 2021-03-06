'use strict';

module.exports = function(sequelize, DataTypes) {
  const Trip = sequelize.define('Trip', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    methodOfTransport: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // The password cannot be null
    duration: {
      type: DataTypes.DATE,
      allowNull: false
    },
    // The password cannot be null
    arrivalDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  Trip.associate = function (models) {
    // associations can be defined here
    Trip.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Trip.hasMany(models.DriverTime, {
      onDelete: "cascade"
    });
  }
  return Trip;
}