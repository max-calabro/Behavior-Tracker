import '../CSS/AllStudents.css'
import { useState, useEffect } from 'react'
import { getStudents } from '../services/Queries'

const AllStudents = ({ setComponentName }) => {
  const [studentList, setStudentList] = useState(null)

  const changeStateBack = (home) => {
    setComponentName(home)
  }

  const getStudentList = async () => {
    const students = await getStudents()
    setStudentList(students)
  }

  useEffect(() => {
    getStudentList()
  }, [])

  return (
    <>
      <section className="all-students-component">
        <div className="flex-row-div">
          <div className="empty-back-button"></div>
          <div className="empty-space-left"></div>
          <div className="component-title">All Students</div>
          <div className="empty-space-right"></div>
          <div className="empty-back-button">
            <button
              className="back-button"
              onClick={() => changeStateBack('home')}
            >
              Back
            </button>
          </div>
        </div>
        <div className="all-student-container">
          <div className="student-table-legend">
            <h3 className="legend-name">Name</h3>
            <div className="dashed-line"></div>
            <h3 className="legend-homeroom">Homeroom</h3>
            <div className="dashed-line"></div>
            <h3 className="legend-schedule">Behavior Tracker</h3>
          </div>
          {studentList
            ? studentList.data.map((student) => (
                <div className="student-container" key={student.id}>
                  <h3 className="student-name">{student.name}</h3>
                  <div className="dashed-line"></div>
                  <h3 className="student-homeroom">{student.homeroom}</h3>
                  <div className="dashed-line"></div>
                  <h3 className="student-schedule">view</h3>
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  )
}

export default AllStudents
