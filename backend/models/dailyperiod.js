'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DailyPeriod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DailyPeriod.init({
    periodId: DataTypes.INTEGER,
    dailyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DailyPeriod',
  });
  return DailyPeriod;
};