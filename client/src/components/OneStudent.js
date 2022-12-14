import '../CSS/OneStudent.css'

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { GetStudentById, GetAllPeriods } from '../services/Queries'

import Schedule from './Schedule'
import EditSchedule from './EditSchedule'
import CreateSchedule from './CreateSchedule'

const OneStudent = ({ handleLogOut }) => {
  const navigate = useNavigate()
  const params = useParams()

  const [periodList, setPeriodList] = useState(null)

  const [studentInfo, setStundetInfo] = useState('')
  const [schedule, setSchedule] = useState('')

  const navigateBack = () => {
    navigate(-1)
  }

  const getStudentInfo = async () => {
    let response = await GetStudentById(params.student_id)
    setStundetInfo(response.data)
  }

  const changeSchedule = (toThis) => {
    setSchedule(toThis)
  }

  const getPeriods = async () => {
    let response = await GetAllPeriods()
    console.log(response.data)
    setPeriodList(response.data)
  }

  useEffect(() => {
    getStudentInfo()
    getPeriods()
  }, [])

  return (
    <>
      <section className="one-student-body">
        <section className="navbar">
          <h1 className="website-title">Behavior Tracker</h1>
          <button onClick={handleLogOut}>Log Out</button>
          <button className="home-button" onClick={() => navigateBack()}>
            Back to Home
          </button>
        </section>
        <main className="one-student-main">
          <div className="student-general-info">
            <div>Name: {studentInfo.name}</div>
            <div>Homeroom: {studentInfo.homeroom}</div>
            {/* <div>
              Targeted Behavior: {studentInfo.BehaviorTracker.targetedBehavior}
            </div>
            <div>Incentive: {studentInfo.BehaviorTracker.incentive}</div> */}
            <div>Other Days</div>
            <div className="button-grouping">
              <button
                className="make-schedule-button"
                onClick={() => changeSchedule('create')}
              >
                Make A New Schedule
              </button>
              <button
                className="edit-schedule-button"
                onClick={() => changeSchedule('edit')}
              >
                Edit Current Schedule
              </button>
            </div>
          </div>
          <div className="empty-div-left">left</div>
          <div className="student-daily-schedule">
            {schedule === 'selected' ? (
              <Schedule
                studentInfo={studentInfo}
                schedule={schedule}
                setSchedule={setSchedule}
              />
            ) : schedule === 'create' ? (
              <CreateSchedule
                studentInfo={studentInfo}
                schedule={schedule}
                setSchedule={setSchedule}
                periodList={periodList}
              />
            ) : schedule === 'edit' ? (
              <EditSchedule
                studentInfo={studentInfo}
                schedule={schedule}
                setSchedule={setSchedule}
              />
            ) : (
              <button onClick={() => changeSchedule('selected')}>
                Select a schedule
              </button>
            )}
          </div>
          <div className="empty-div-right">right</div>
        </main>
      </section>
    </>
  )
}

export default OneStudent
