import '../CSS/SignIn.css'
import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate, Link } from 'react-router-dom'

const SignIn = ({ setUser }) => {
  const navigate = useNavigate()

  const initialState = { email: '', password: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setUser(payload)
    setFormValues(initialState)
    navigate('/home')
  }

  return (
    <>
      <section className="title-card">
        <h1 className="website-title">Behavior Tracker</h1>
      </section>
      <section className="login-form">
        <h3 className="login-header">Sign In</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formValues.email}
            required
          />
          <input
            onChange={handleChange}
            className="password"
            name="password"
            type="password"
            value={formValues.password}
            placeholder="Password"
            required
          />
          <div className="signin-or-register">
            <button
              className="submit"
              type="submit"
              disabled={!formValues.email || !formValues.password}
            >
              Sign In
            </button>
            <div className="register">
              <Link to="/register">Register</Link>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default SignIn
