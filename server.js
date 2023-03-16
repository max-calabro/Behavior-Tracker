const express = require('express')
const cors = require('cors')
const logger = require('morgan')
//const path = require('path')

const StudentRouter = require('./routes/StudentRouter')
const CounselorRouter = require('./routes/CounselorRouter')
const PeriodRouter = require('./routes/PeriodRouter')
const DailyScheduleRouter = require('./routes/DailyScheduleRouter')
const BehaviorTracker = require('./routes/BehaviorTrackerRouter')
const AuthStudentRouter = require('./routes/AuthStudentRouter')
const AuthCounselorRouter = require('./routes/AuthCounselorRouter')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
// app.use(
//   express.static(path.join(__dirname, 'Behavior-Tracker/client/src/index.js'))
// )
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works!' }))
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/public/index.html'))
// })
app.use('/student', StudentRouter)
app.use('/counselor', CounselorRouter)
app.use('/period', PeriodRouter)
app.use('/schedule', DailyScheduleRouter)
app.use('/behaviorTracker', BehaviorTracker)
app.use('/auth/student', AuthStudentRouter)
app.use('/auth/counselor', AuthCounselorRouter)

app.listen(PORT, () => console.log(`Server StartedOn Port: ${PORT}`))
