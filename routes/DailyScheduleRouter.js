const router = require('express').Router()
const controller = (require = require('../controllers/DailyScheduleController'))

router.get('/:schedule_id', controller.GetScheduleById)
router.post('/', controller.CreateSchedule)
router.put('/add-period-to/:schedule_id', controller.AddAPeriodToSchedule)
router.put('/:schedule_id', controller.UpdateSchedule)
router.delete('/:schedule_id', controller.DeleteSchedule)

module.exports = router
