import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import HomePage from './Components/HomePage'
import InputForm from './Components/InputForm'
import MblOTP from './Components/MblOTP'
import NavBar from './Components/NavBar'
import SignUp from './Components/SignUp'

export default function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<InputForm/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/mblOTP' element={<MblOTP/>}/>
      </Routes>
  
    
    </>
  )
}
