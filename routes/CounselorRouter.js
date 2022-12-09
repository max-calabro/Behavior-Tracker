const router = require('express').Router()
const controller = (require = require('../controllers/CounselorController'))

router.get('/', controller.GetAllCounselor)
router.get('/:counselor_id', controller.GetCounselorById)
router.put('/:counselor_id', controller.UpdateCounselor)
router.delete('/:counselor_id', controller.DeleteCounselor)

module.exports = router
