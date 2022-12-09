const router = require('express').Router()
const controller =
  (require = require('../controllers/BehaviorTrackerController'))

router.get('/', controller.GetAllTrackers)
router.get('/:tracker_id', controller.GetTrackerById)
router.post('/', controller.CreateTracker)
router.put('/:tracker_id', controller.UpdateTracker)
router.delete('/:tracker_id', controller.DeleteTracker)

module.exports = router
