import '../CSS/Homepage.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import AllStudents from '../components/AllStudents'
import NewStudents from '../components/NewStudent'
import Trends from '../components/Trends'
import HowToUse from '../components/HowToUse'

const Homepage = () => {
  const navigate = useNavigate()

  const [componentName, setComponentName] = useState('home')

  const renderComponent = (componentName) => {
    setComponentName(componentName)
  }

  return (
    <>
      <section className="homepage-body">
        <section className="navbar">
          <h1 className="website-title">Behavior Tracker</h1>
          <h1 className="counselor-name">Welcome Back *Counselor Name*</h1>
        </section>
        <main className="homepage-main">
          <div className="flex-div">
            {componentName === 'home' ? (
              <section className="website-functions">
                <div
                  className="all-students"
                  onClick={() => renderComponent('all-students')}
                >
                  <h3 className="function-title">List of Students</h3>
                </div>
                <div
                  className="new-student"
                  onClick={() => renderComponent('new-student')}
                >
                  <h3 className="function-title">Add a Student</h3>
                </div>
                <div
                  className="trends"
                  onClick={() => renderComponent('trends')}
                >
                  <h3 className="function-title">Trends</h3>
                </div>
                <div
                  className="how-to-use"
                  onClick={() => renderComponent('how-to-use')}
                >
                  <h3 className="function-title">How To Use</h3>
                </div>
              </section>
            ) : componentName === 'all-students' ? (
              <AllStudents setComponentName={setComponentName} />
            ) : componentName === 'new-students' ? (
              <NewStudents setComponentName={setComponentName} />
            ) : componentName === 'trends' ? (
              <Trends setComponentName={setComponentName} />
            ) : (
              <HowToUse setComponentName={setComponentName} />
            )}
          </div>
        </main>
      </section>
    </>
  )
}

export default Homepage
