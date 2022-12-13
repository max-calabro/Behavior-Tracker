import '../CSS/OneStudent.css'

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { GetStudentById } from '../services/Queries'

const OneStudent = ({ handleLogOut }) => {
  const navigate = useNavigate()
  const params = useParams()

  const [studentInfo, setStundetInfo] = useState('')

  const navigateBack = () => {
    navigate(-1)
  }

  const getStudentInfo = async () => {
    let response = await GetStudentById(params.student_id)
    console.log(response.data)
    setStundetInfo(response.data)
  }

  useEffect(() => {
    getStudentInfo()
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
            <div>
              Targeted Behavior: {studentInfo.BehaviorTracker.targetedBehavior}
            </div>
            <div>Incentive: {studentInfo.BehaviorTracker.incentive}</div>
            <div>Other Days</div>
          </div>
          <div className="empty-div-left">left</div>
          <div className="student-daily-schedule">
            <div className="student-schedule-top">
              <div>Date</div>
              <div className="between-date-and-name"></div>
              <div>{studentInfo.name}</div>
            </div>
            <div className="student-schedule-grid">
              <div className="grid-tile">
                <div className="period-name">Period Name</div>
                <div className="behavior-plan-style">
                  <div className="box-1">1</div>
                  <div className="box-2">2</div>
                </div>
              </div>
              <div className="grid-tile">2</div>
              <div className="grid-tile">3</div>
              <div className="grid-tile">4</div>
              <div className="grid-tile">5</div>
              <div className="grid-tile">6</div>
              <div className="grid-tile">7</div>
              <div className="grid-tile">8</div>
              <div className="grid-tile">9</div>
              <div className="grid-tile">10</div>
              <div className="grid-tile">11</div>
              <div className="grid-tile">12</div>
              <div className="grid-tile">13</div>
              <div className="grid-tile">14</div>
              <div className="grid-tile">15</div>
            </div>
          </div>
          <div className="empty-div-right">right</div>
        </main>
      </section>
    </>
  )
}

export default OneStudent
