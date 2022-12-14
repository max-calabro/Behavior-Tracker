import '../CSS/OneStudent.css'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { GetStudentById, GetScheduleById } from '../services/Queries'

const Schedule = ({ studentInfo, schedule, setSchedule, selectedSchedule }) => {
  const params = useParams()

  const [currentSchedule, setCurrentSchedule] = useState(null)

  const getTheCurrentSchedule = async () => {
    let response = await GetStudentById(params.student_id)
    console.log(response.data.DailySchedules[0].id)
    let newS = await GetScheduleById(response.data.DailySchedules[0].id)
    console.log(newS.data)
    setCurrentSchedule(newS.data)
  }

  useEffect(() => {
    getTheCurrentSchedule()
  }, [])
  return currentSchedule ? (
    <>
      <div className="student-schedule-top">
        <div>{currentSchedule.date}</div>
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
    </>
  ) : (
    <div></div>
  )
}

export default Schedule
