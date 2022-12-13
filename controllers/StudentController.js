const {
  Student,
  Counselor,
  CounselorStudent,
  BehaviorTracker
} = require('../models')

const GetAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      include: { model: BehaviorTracker }
    })
    res.send(students)
  } catch (error) {
    throw error
  }
}

const GetStudentById = async (req, res) => {
  try {
    let id = parseInt(req.params.student_id)
    const student = await Student.findByPk(id, {
      include: { model: BehaviorTracker }
    })
    res.send(student)
  } catch (error) {
    throw error
  }
}

const CreateStudent = async (req, res) => {
  try {
    const NewStudent = await Student.create({ ...req.body })
    res.send(NewStudent)
  } catch (error) {
    throw error
  }
}

const UpdateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.update(
      { ...req.body },
      { where: { id: req.params.student_id }, returning: true }
    )
    res.send(updatedStudent)
  } catch (error) {
    throw error
  }
}

const DeleteStudent = async (req, res) => {
  try {
    await Student.destroy({ where: { id: req.params.student_id } })
    res.send({
      msg: 'Student Deleted',
      payload: req.params.student_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllStudents,
  GetStudentById,
  CreateStudent,
  UpdateStudent,
  DeleteStudent
}
