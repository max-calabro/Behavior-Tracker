'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Period extends Model {
    static associate(models) {
      Period.belongsToMany(models.DailySchedule, {
        through: 'daily_periods',
        as: 'schedules',
        foreignKey: 'periodId'
      })
    }
  }
  Period.init(
    {
      name: DataTypes.STRING,
      notes: DataTypes.STRING,
      behavior: DataTypes.INTEGER //  negative/0/positive
    },
    {
      sequelize,
      modelName: 'Period',
      tableName: 'periods'
    }
  )
  return Period
}
