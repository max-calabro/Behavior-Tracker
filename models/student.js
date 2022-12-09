'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.hasOne(models.BehaviorTracker, { foreignKey: 'studentTrackerId' })
      Student.hasMany(models.DailySchedule, { foreignKey: 'studentId' })
      Student.belongsToMany(models.Counselor, {
        through: 'counselors_students',
        as: 'students',
        foreignKey: 'studentId'
      })
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      homeroom: DataTypes.STRING,
      specialEdPlacement: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Student',
      tableName: 'students'
    }
  )
  return Student
}
