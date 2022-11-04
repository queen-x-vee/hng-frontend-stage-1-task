import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App