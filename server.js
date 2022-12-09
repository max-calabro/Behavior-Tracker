const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const StudentRouter = require('./routes/StudentRouter')
const CounselorRouter = require('./routes/CounselorRouter')
const AuthStudentRouter = require('./routes/AuthStudentRouter')
const AuthCounselorRouter = require('./routes/AuthCounselorRouter')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works!' }))
app.use('/student', StudentRouter)
app.use('/counselor', CounselorRouter)
app.use('/auth/student', AuthStudentRouter)
app.use('/auth/counselor', AuthCounselorRouter)

app.listen(PORT, () => console.log(`Server StartedOn Port: ${PORT}`))
