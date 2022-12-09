const router = require('express').Router()
const controller = (require = require('../controllers/StudentController'))

router.get('/', controller.GetAllStudents)
router.get('/:student_id', controller.GetStudentById)
router.put('/:student_id', controller.UpdateStudent)

module.exports = router
