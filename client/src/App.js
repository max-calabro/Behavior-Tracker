import './CSS/App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'

import Landing from './pages/Landing'
import Homepage from './pages/Homepage'
import Register from './components/Register'

function App() {
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const [user, setUser] = useState(null)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
