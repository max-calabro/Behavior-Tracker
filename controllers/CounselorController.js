const { Counselor } = require('../models')

const GetAllCounselor = async (req, res) => {
  try {
    const counselors = await Counselor.findAll()
    res.send(counselors)
  } catch (error) {
    throw error
  }
}

const GetCounselorById = async (req, res) => {
  try {
    let id = parseInt(req.params.counselor_id)
    const counselor = await Counselor.findByPk(id)
    res.send(counselor)
  } catch (error) {
    throw error
  }
}

const UpdateCounselor = async (req, res) => {
  try {
    const updatedCounselor = await Counselor.update(
      { ...req.body },
      { where: { id: req.params.counselor_id }, returning: true }
    )
    res.send(updatedCounselor)
  } catch (error) {
    throw error
  }
}

const DeleteCounselor = async (req, res) => {
  try {
    await Counselor.destroy({ where: { id: req.params.counselor_id } })
    res.send({
      msg: 'Student Deleted',
      payload: req.params.counselor_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllCounselor,
  GetCounselorById,
  UpdateCounselor,
  DeleteCounselor
}
