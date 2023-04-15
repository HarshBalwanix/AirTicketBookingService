'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BOOKING extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BOOKING.init({
    flightId: 
    {
    type:DataTypes.INTEGER,
    allowNull:false
  },
    userId: 
    {
    type:DataTypes.INTEGER,
    allowNull:false
  },
    status: 
    {type:DataTypes.ENUM,
      allowNull:false,
      values:["InProcess","Booked","Cancelled"],
      defaultValue:'InProcess'
    }
  }, {
    sequelize,
    modelName: 'BOOKING',
  });
  return BOOKING;
};