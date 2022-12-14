const { DailySchedule, Period, DailyPeriod } = require('../models')

const CreateSchedule = async (req, res) => {
  try {
    const newSchedule = await DailySchedule.create({ ...req.body })
    res.send(newSchedule)
  } catch (error) {
    throw error
  }
}

const AddAPeriodToSchedule = async (req, res) => {
  try {
    const schedule = await DailySchedule.findByPk(req.params.schedule_id)
    await schedule.addPeriods([req.body.periodId])
    await schedule.save()
    const response = await DailySchedule.findByPk(req.params.schedule_id, {
      include: { model: Period, through: DailyPeriod, as: 'periods' }
    })
    res.send(response)
  } catch (error) {
    throw error
  }
}

const UpdateSchedule = async (req, res) => {
  try {
    const updatedSchedule = await DailySchedule.update(
      { ...req.body },
      { where: { id: req.params.schedule_id }, returning: true }
    )
    res.send(updatedSchedule)
  } catch (error) {
    throw error
  }
}

const DeleteSchedule = async (req, res) => {
  try {
    await DailySchedule.destroy({ where: { id: req.params.schedule_id } })
    res.send({
      msg: 'Schedule Deleted',
      payload: req.params.schedule_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateSchedule,
  AddAPeriodToSchedule,
  UpdateSchedule,
  DeleteSchedule
}
