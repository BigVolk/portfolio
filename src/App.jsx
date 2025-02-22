import React, { useRef, useState, useEffect } from 'react'
import FrontPage from "./pages/FrontPage/FrontPage.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReserveLessonPage from './pages/ReserveLesson/ReserveLessonPage.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<FrontPage />}/>
          <Route path='/reserve-lesson' element={<ReserveLessonPage />}/>
        </Routes>
      </Router>
    </div >
  )
}

export default App
