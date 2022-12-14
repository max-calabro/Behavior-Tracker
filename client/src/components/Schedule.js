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

  const changeColor = (ofThis, andThis, color) => {
    let toBeChanged = document.querySelector(ofThis)
    let alsoChange = document.querySelector(andThis)
    if (color === 'green') {
      toBeChanged.style.backgroundColor = 'rgb(8, 208, 8)'
      alsoChange.style.backgroundColor = 'rgb(233, 223, 223)'
      //  Axios call to change behavior to positive
    } else {
      toBeChanged.style.backgroundColor = 'red'
      alsoChange.style.backgroundColor = ''
      //  Axios call to change behavior to negative
    }
  }

  useEffect(() => {
    getTheCurrentSchedule()
    console.log('hi')
  }, [])

  return currentSchedule ? (
    <>
      <div className="student-schedule-top">
        <div>{currentSchedule.date}</div>
        <div className="between-date-and-name"></div>
        <div>{currentSchedule.name}</div>
      </div>
      <div className="student-schedule-grid">
        {/* <div className="grid-tile">
          <div className="period-name">{currentSchedule.periods[0].name}</div>
          <div className="between-name-and-style"></div>
          <div className="behavior-plan-style">
            <div
              className="box-1-0"
              onClick={() => changeColor('.box-1-0', 'green')}
            >
              1
            </div>
            <div
              className="box-2-0"
              onClick={() => changeColor('.box-2-0', 'red')}
            >
              2
            </div>
          </div>
        </div> */}
        {currentSchedule.periods.map((period, index) => (
          <div className="grid-tile" key={period.id}>
            <div className="period-name">{period.name}</div>
            <div className="between-name-and-style"></div>
            <div className="behavior-plan-style">
              <div
                className={'box-1-' + index}
                onClick={() =>
                  changeColor(`.box-1-${index}`, `.box-2-${index}`, 'green')
                }
              >
                1
              </div>
              <div
                className={'box-2-' + index}
                onClick={() =>
                  changeColor(`.box-2-${index}`, `.box-1-${index}`, 'red')
                }
              >
                2
              </div>
            </div>
          </div>
        ))}
        {/* <div className="grid-tile">
          <div className="period-name">{currentSchedule.periods[1].name}</div>
          <div className="between-name-and-style"></div>
          <div className="behavior-plan-style">
            <div
              className="box-1-1"
              onClick={() => changeColor('.box-1-1', 'green')}
            >
              1
            </div>
            <div
              className="box-2-1"
              onClick={() => changeColor('.box-2-1', 'red')}
            >
              2
            </div>
          </div>
        </div>

        <div className="grid-tile">
          <div className="period-name">{currentSchedule.periods[2].name}</div>
          <div className="between-name-and-style"></div>
          <div className="behavior-plan-style">
            <div
              className="box-1-2"
              onClick={() => changeColor('.box-1-2', 'green')}
            >
              1
            </div>
            <div
              className="box-2-2"
              onClick={() => changeColor('.box-2-2', 'red')}
            >
              2
            </div>
          </div>
        </div>

        <div className="grid-tile">
          <div className="period-name">{currentSchedule.periods[3].name}</div>
          <div className="between-name-and-style"></div>
          <div className="behavior-plan-style">
            <div
              className="box-1-3"
              onClick={() => changeColor('.box-1-3', 'green')}
            >
              1
            </div>
            <div
              className="box-2-3"
              onClick={() => changeColor('.box-2-3', 'red')}
            >
              2
            </div>
          </div>
        </div>

        <div className="grid-tile">
          <div className="period-name">{currentSchedule.periods[4].name}</div>
          <div className="between-name-and-style"></div>
          <div className="behavior-plan-style">
            <div
              className="box-1-4"
              onClick={() => changeColor('.box-1-4', 'green')}
            >
              1
            </div>
            <div
              className="box-2-4"
              onClick={() => changeColor('.box-2-4', 'red')}
            >
              2
            </div>
          </div>
        </div>

        <div className="grid-tile">
          <div className="period-name">{currentSchedule.periods[5].name}</div>
          <div className="between-name-and-style"></div>
          <div className="behavior-plan-style">
            <div
              className="box-1-5"
              onClick={() => changeColor('.box-1-5', 'green')}
            >
              1
            </div>
            <div
              className="box-2-5"
              onClick={() => changeColor('.box-2-5', 'red')}
            >
              2
            </div>
          </div>
        </div>

        <div className="grid-tile">
          <div className="period-name">{currentSchedule.periods[3].name}</div>
          <div className="between-name-and-style"></div>
          <div className="behavior-plan-style">
            <div
              className="box-1-6"
              onClick={() => changeColor('.box-1-6', 'green')}
            >
              1
            </div>
            <div
              className="box-2-6"
              onClick={() => changeColor('.box-2-6', 'red')}
            >
              2
            </div>
          </div>
        </div>

        <div className="grid-tile">8</div>
        <div className="grid-tile">9</div>
        <div className="grid-tile">10</div>
        <div className="grid-tile">11</div>
        <div className="grid-tile">12</div>
        <div className="grid-tile">13</div>
        <div className="grid-tile">14</div> */}
        {/* <div className="grid-tile">15</div> */}
      </div>
    </>
  ) : (
    <div></div>
  )
}

export default Schedule
