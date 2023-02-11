import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Announcements from '../pages/Announcements'
import Notifications from '../pages/Notifications'
import Courses from '../pages/Courses'
import MaterialsPages from '../pages/courses-pages/MaterialsPages'
import RatingsPages from '../pages/courses-pages/RatingsPages'
import StudentsPages from '../pages/courses-pages/StudentsPages'
import Schedule from '../pages/Schedule'
import StudentDetails from '../pages/courses-pages/student-details-pages/StudentDetails'
import MaterialDetails from '../pages/courses-pages/material-detail-page/MaterialDetails'
import Submitted from '../pages/courses-pages/material-detail-page/Submitted'
import Waiting from '../pages/courses-pages/material-detail-page/Waiting'
import Late from '../pages/courses-pages/material-detail-page/Late'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/courses/' element={<Courses/>}>
            <Route path='materials' element={<MaterialsPages/>} >
            <Route path=":id/details" element={<MaterialDetails/>}>
              <Route path='submitted' element={<Submitted/>}/>
              <Route path='waiting' element={<Waiting/>} />
              <Route path='late' element={<Late/>} />
            </Route>
            </Route>

            <Route path='students/' element={<StudentsPages/>} >
            <Route path=":id/details" element={<StudentDetails/>} />
            </Route>
            <Route path='ratings' element={<RatingsPages/>} />
            </Route>

            <Route path='/announcements' element={<Announcements/>} />
            <Route path='/notifications' element={<Notifications/>} />
            <Route path='/schedule' element={<Schedule/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes;