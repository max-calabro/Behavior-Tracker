'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Period extends Model {
    static associate(models) {
      Period.belongsToMany(models.DailySchedule, {
        through: 'daily_periods',
        as: 'dailys',
        foreignKey: 'periodId'
      })
    }
  }
  Period.init(
    {
      name: DataTypes.STRING,
      behavior: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Period',
      tableName: 'periods'
    }
  )
  return Period
}
