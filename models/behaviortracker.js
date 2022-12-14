'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class BehaviorTracker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BehaviorTracker.belongsTo(models.Student, { foreignKey: 'studentId' })
    }
  }
  BehaviorTracker.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'students',
          key: 'id'
        }
      },
      style: DataTypes.STRING,
      incentive: DataTypes.STRING,
      targetedBehavior: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'BehaviorTracker',
      tableName: 'behavior_trackers'
    }
  )
  return BehaviorTracker
}
