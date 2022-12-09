const { BehaviorTracker, Student } = require('../models')

const GetAllTrackers = async (req, res) => {
  try {
    const trackers = await BehaviorTracker.findAll({
      include: { model: Student }
    })
    res.send(trackers)
  } catch (error) {
    throw error
  }
}

const GetTrackerById = async (req, res) => {
  try {
    let id = parseInt(req.params.tracker_id)
    const tracker = await BehaviorTracker.findByPk(id, {
      include: { model: Student }
    })
    res.send(tracker)
  } catch (error) {
    throw error
  }
}

const CreateTracker = async (req, res) => {
  try {
    const newTracker = await BehaviorTracker.create({ ...req.body })
    res.send(newTracker)
  } catch (error) {
    throw error
  }
}

const UpdateTracker = async (req, res) => {
  try {
    const updatedTracker = await BehaviorTracker.update(
      { ...req.body },
      { where: { id: req.params.tracker_id }, returning: true }
    )
    res.send(updatedTracker)
  } catch (error) {
    throw error
  }
}

const DeleteTracker = async (req, res) => {
  try {
    await BehaviorTracker.destroy({ where: { id: req.params.tracker_id } })
    res.send({
      msg: 'Tracker Deleted',
      payload: req.params.tracker_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllTrackers,
  GetTrackerById,
  CreateTracker,
  UpdateTracker,
  DeleteTracker
}
