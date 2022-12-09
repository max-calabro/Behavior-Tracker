'use strict'
const { Model } = require('sequelize')
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
  DailyPeriod.init(
    {
      periodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'periods',
          key: 'id'
        }
      },
      dailyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'daily_schedules',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'DailyPeriod',
      tableName: 'daily_periods'
    }
  )
  return DailyPeriod
}
