'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BehaviorTracker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BehaviorTracker.init({
    studentId: DataTypes.INTEGER,
    style: DataTypes.STRING,
    incentive: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BehaviorTracker',
  });
  return BehaviorTracker;
};