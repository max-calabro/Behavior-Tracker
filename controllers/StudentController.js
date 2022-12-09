const { Student } = require('../models')

const GetAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}

const GetStudentById = async (req, res) => {
  try {
    let id = parseInt(req.params.student_id)
    const student = await Student.findByPk(id)
    res.send(student)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllStudents,
  GetStudentById
}
