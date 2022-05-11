import React from 'react';
import {useSelector} from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './redux/utils/setAuthToken'
import store from './redux/store'

import { setFacultyUser, facultyLogout } from './redux/action/facultyAction'

import { setAdminUser, adminLogout } from './redux/action/adminAction'

import { setStudentUser, studentLogout } from './redux/action/studentAction'


import LoginPage from './Pages/Admin/LoginPage'




import AdminAddStudent from '../src/Pages/Admin/AdminAddStudent'
import AdminAddFaculty from '../src/Pages/Admin/AdminAddFaculty'
import AdminAddSubject from '../src/Pages/Admin/AdminAddSubject'
import AdminAddAdmin from '../src/Pages/Admin/AdminAddAdmin'
import AdminGetAllFaculty from '../src/Pages/Admin/AdminGetAllFaculty'
import AdminGetAllStudent from '../src/Pages/Admin/AdminGetAllStudents'
import AdminGetAllSubject from '../src/Pages/Admin/AdminGetAllSubjects'
import AdminHome from '../src/Pages/Admin/AdminHome'

import FacultyStudentLoginPags from '../src/Pages/Faculty/FacultyStudentLoginPags'
import FacultyUpdatePassword from '../src/Pages/Faculty/FacultyUpdatePassword'
import facultyInterface from '../src/Pages/Faculty/FacultyInterface'
import AttendenceFaculty from '../src/Pages/Faculty/AttendenceFaculty'
import FacultyUploadMarks from '../src/Pages/Faculty/FacultyUploadMarks'
import FacultyUpdateProfile from '../src/Pages/Faculty/FacultyUpdateProfile'

import Home from '../src/Pages/Student/StudentHome'
import StudentAttendencePage from '../src/Pages/Student/StudentAttendencePage'
import StudentUpdatePassword from '../src/Pages/Student/StudentUpdatePassword'
import StudentUpdateProfile from '../src/Pages/Student/StudentUpdateProfile'
import StudentSubjectList from '../src/Pages/Student/StudentSubjectList'
import StudentTestPerformace from '../src/Pages/Student/StudentTestPerformance'


import ForgotPassword from './Pages/ForgotPassword'


 
if (window.localStorage.facultyJwtToken) {
  setAuthToken(localStorage.facultyJwtToken);
  const decoded = jwt_decode(localStorage.facultyJwtToken);
 
  store.dispatch(setFacultyUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(facultyLogout());
    window.location.href = '/';
  }
}
else if (window.localStorage.studentJwtToken) {
  setAuthToken(localStorage.studentJwtToken);
  const decoded = jwt_decode(localStorage.studentJwtToken);

  store.dispatch(setStudentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(studentLogout());
    window.location.href = '/';
  } 
}
else if (window.localStorage.adminJwtToken) {
  setAuthToken(localStorage.adminJwtToken);
  const decoded = jwt_decode(localStorage.adminJwtToken);

  store.dispatch(setAdminUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(adminLogout());
    window.location.href = '/';
  } 
}

function App() {
  const store = useSelector((store)=>store)
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={FacultyStudentLoginPags} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/faculty' component={facultyInterface} />
          <Route exact path='/attendenceFaculty' component={AttendenceFaculty} />
          
          <Route exact path='/admin' component={AdminHome} />
          <Route exact path='/adminLogin' component={LoginPage} />
          <Route exact path="/admin/addAdmin" component={AdminAddAdmin} />
          <Route exact path="/admin/addStudent" component={AdminAddStudent} />
          <Route exact path="/admin/addFaculty" component={AdminAddFaculty} />
          <Route exact path="/admin/addSubject" component={AdminAddSubject} />
          <Route exact path="/admin/allFaculties" component={AdminGetAllFaculty} />
          <Route exact path="/admin/allStudents" component={AdminGetAllStudent} />
          <Route exact path="/admin/allSubject" component={AdminGetAllSubject} />
          
          
          <Route exact path='/student/updateProfile' component={StudentUpdateProfile} />
          <Route exact path="/student/attendence" component={StudentAttendencePage} />
          <Route exact path="/student/updatePassword" component={StudentUpdatePassword} />
          <Route exact path="/student/testPerformance" component={StudentTestPerformace} />
          <Route exact path="/student/getAllSubjects" component={StudentSubjectList} />

          <Route exact path="/faculty/updatePassword" component={FacultyUpdatePassword} />
          <Route exact path="/faculty/uploadMarks" component={FacultyUploadMarks} />
          <Route exact path="/faculty/updateProfile" component={FacultyUpdateProfile} />

          <Route exact path="/forgotPassword/:user" component={ForgotPassword} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
