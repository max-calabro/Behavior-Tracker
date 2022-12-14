'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class DailySchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DailySchedule.belongsTo(models.Student, {
        as: 'studentSchedules',
        foreignKey: 'studentId'
      })
      DailySchedule.belongsToMany(models.Period, {
        through: 'daily_periods',
        as: 'periods',
        foreignKey: 'dailyId'
      })
    }
  }
  DailySchedule.init(
    {
      name: DataTypes.STRING,
      date: DataTypes.DATE,
      studentId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'students',
          key: 'id'
        }
      },
      notes: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'DailySchedule',
      tableName: 'daily_schedules'
    }
  )
  return DailySchedule
}
