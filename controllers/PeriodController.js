const { Period } = require('../models')

const GetAllPeriods = async (req, res) => {
  try {
    const periods = await Period.findAll()
    res.send(periods)
  } catch (error) {
    throw error
  }
}

const GetPeriodById = async (req, res) => {
  try {
    let id = parseInt(req.params.period_id)
    const period = await Period.findByPk(id)
    res.send(period)
  } catch (error) {
    throw error
  }
}

const CreatePeriod = async (req, res) => {
  try {
    const newPeriod = await Period.create({ ...req.body })
    res.send(newPeriod)
  } catch (error) {
    throw error
  }
}

const UpdatePeriod = async (req, res) => {
  try {
    const updatedPeriod = await Period.update(
      { ...req.body },
      { where: { id: req.params.period_id }, returning: true }
    )
    res.send(updatedPeriod)
  } catch (error) {
    throw error
  }
}

const DeletePeriod = async (req, res) => {
  try {
    await Period.destroy({ where: { id: req.params.period_id } })
    res.send({
      msg: 'Period Deleted',
      payload: req.params.period_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllPeriods,
  GetPeriodById,
  CreatePeriod,
  UpdatePeriod,
  DeletePeriod
}
