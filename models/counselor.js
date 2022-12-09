'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Counselor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Counselor.belongsToMany(models.Student, {
        through: 'counselors_students',
        as: 'counselors',
        foreignKey: 'counselorId'
      })
    }
  }
  Counselor.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      officeLocation: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Counselor',
      tableName: 'counselors'
    }
  )
  return Counselor
}
