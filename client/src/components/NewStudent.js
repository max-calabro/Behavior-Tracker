import '../CSS/NewStudent.css'
import { useState } from 'react'
import { CreateStudent, AssignStudentToCounselor } from '../services/Queries'

const NewStudent = ({ setComponentName, user }) => {
  const initialState = {
    firstName: '',
    lastName: '',
    placement: '',
    homeroom: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const changeStateBack = (home) => {
    setComponentName(home)
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let newStudent = await CreateStudent({
      name: `${formValues.firstName} ${formValues.lastName}`,
      placement: formValues.placement,
      homeroom: formValues.homeroom
    })
    await AssignStudentToCounselor(newStudent.data.id, user.id)
    setFormValues(initialState)
    // navigate('/')
  }

  return (
    <>
      <section className="new-student-component">
        <div className="flex-row-div">
          <div className="empty-back-button"></div>
          <div className="empty-space-left"></div>
          <div className="component-title">New Student Form</div>
          <div className="empty-space-right"></div>
          <div className="empty-back-button">
            <button onClick={() => changeStateBack('home')}>Back</button>
          </div>
        </div>
        <section className="new-student-form">
          <form className="form-body" onSubmit={handleSubmit}>
            <div className="new-student-name">
              <input
                onChange={handleChange}
                className="first-name"
                name="firstName"
                type="text"
                placeholder="First"
                value={formValues.firstName}
                required
              />
              <input
                onChange={handleChange}
                className="last-name"
                name="lastName"
                type="text"
                placeholder="Last"
                value={formValues.lastName}
                required
              />
            </div>
            <div className="new-student-placement">
              <select
                onChange={handleChange}
                className="placement"
                name="placement"
                value={formValues.value}
              >
                <option selected disabled>
                  Special Ed Placement
                </option>
                <option value="504">504</option>
                <option value="IEP">IEP</option>
                <option value="Gen Ed">Gen Ed</option>
              </select>
            </div>
            <div className="new-student-homeroom">
              <input
                onChange={handleChange}
                className="homeroom"
                name="homeroom"
                type="text"
                placeholder="Homeroom"
                value={formValues.homeroom}
                required
              />
            </div>
            <button
              disabled={
                !formValues.firstName ||
                !formValues.lastName ||
                !formValues.placement ||
                !formValues.homeroom
              }
              className="register-button"
              type="submit"
            >
              Add Student
            </button>
          </form>
        </section>
      </section>
    </>
  )
}

export default NewStudent
