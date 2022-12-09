const router = require('express').Router()
const middleware = require('../middleware')
const controller = (require = require('../controllers/CounselorController'))

router.get('/', controller.GetAllCounselor)
router.get('/:counselor_id', controller.GetCounselorById)
router.put(
  '/:counselor_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateCounselor
)
router.put(
  '/assignStudentTo/:counselor_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.AssignStudentToCounselor
)
router.delete(
  '/:student_id/:counselor_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.RemoveStudentFromCounselor
)
router.delete(
  '/:counselor_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteCounselor
)

module.exports = router
