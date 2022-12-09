const router = require('express').Router()
const controller = (require = require('../controllers/StudentController'))

router.get('/', controller.GetAllStudents)

module.exports = router
