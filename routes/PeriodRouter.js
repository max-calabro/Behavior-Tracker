const router = require('express').Router()
const controller = (require = require('../controllers/PeriodController'))

router.get('/', controller.GetAllPeriods)
router.get('/:period_id', controller.GetPeriodById)
router.post('/', controller.CreatePeriod)
router.put('/:period_id', controller.UpdatePeriod)
router.delete('/:period_id', controller.DeletePeriod)

module.exports = router
