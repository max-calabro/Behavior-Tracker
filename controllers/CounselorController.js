const { Counselor, Student, CounselorStudent } = require('../models')

const GetAllCounselor = async (req, res) => {
  try {
    const counselors = await Counselor.findAll()
    res.send(counselors)
  } catch (error) {
    throw error
  }
}

const GetCounselorAndStudents = async (req, res) => {
  try {
    let id = parseInt(req.params.counselor_id)
    const counselor = await Counselor.findByPk(id, {
      include: {
        model: Student,
        through: CounselorStudent,
        as: 'students'
      }
    })
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

const AssignStudentToCounselor = async (req, res) => {
  try {
    const counselor = await Counselor.findByPk(req.params.counselor_id)
    await counselor.addStudents([req.body.studentId])
    await counselor.save()
    const response = await Counselor.findByPk(req.params.counselor_id, {
      include: { model: Student, through: CounselorStudent, as: 'students' }
    })
    res.send(response)
  } catch (error) {
    throw error
  }
}

const RemoveStudentFromCounselor = async (req, res) => {
  try {
    const counselor_id = req.params.counselor_id
    const student_id = req.params.student_id
    await CounselorStudent.destroy({
      where: { counselorId: counselor_id } && { studentId: student_id }
    })
    const respoonse = await Counselor.findByPk(counselor_id, {
      include: { model: Student, through: CounselorStudent, as: 'students' }
    })
    res.send(respoonse)
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
  GetCounselorAndStudents,
  UpdateCounselor,
  AssignStudentToCounselor,
  DeleteCounselor,
  RemoveStudentFromCounselor
}
