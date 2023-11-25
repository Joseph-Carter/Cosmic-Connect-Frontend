import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './Components/UserAuth/UserContext'

import LogIn from './Pages/LogIn'
import SignUp from './Pages/SignUp'
import Index from './Pages'
import New from './Pages/New'



function App() {


  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<LogIn />} /> 
            <Route path='/signup' element={<SignUp />} />
            <Route path='/users/:userId/posts' element={<Index />} />
            <Route path='/users/:userId/posts/newpost' element={<New />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
    
  )
}

export default App
