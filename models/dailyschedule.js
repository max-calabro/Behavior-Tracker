'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DailySchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DailySchedule.init({
    date: DataTypes.DATE,
    studentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DailySchedule',
  });
  return DailySchedule;
};