import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './Components/UserAuth/UserContext'

import LogIn from './Pages/LogIn'
import SignUp from './Pages/SignUp'



function App() {


  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<LogIn />} /> 
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
    
  )
}

export default App
