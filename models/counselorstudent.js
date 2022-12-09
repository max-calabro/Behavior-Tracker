'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CounselorStudent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CounselorStudent.init(
    {
      counselorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'counselors',
          key: 'id'
        }
      },
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'students',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'CounselorStudent',
      tableName: 'counselors_students'
    }
  )
  return CounselorStudent
}
