import './CSS/App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Landing from './pages/Landing'

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing setUser={setUser} />} />
      </Routes>
    </>
  )
}

export default App
