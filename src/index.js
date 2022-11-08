import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Staffportal from './components/staffcomponents/Staffportal';
import Stafflogin from './components/staffcomponents/Stafflogin';
import StaffRegister from './components/staffcomponents/StaffRegister';
import AddCourse from './components/staffcomponents/AddCourse';
import StaffCourse from './components/staffcomponents/StaffCourse';
import StaffStudent from './components/staffcomponents/StaffStudent';
import StudentPortal from './components/studentcomponents/StudentPortal';
import StudentRegister from './components/studentcomponents/StudentRegister';
import StudentLogin from './components/studentcomponents/StudentLogin';
import StudentSubscriptions from './components/studentcomponents/StudentSubscriptions';
import StudentCourses from './components/studentcomponents/StudentCourses';
import Home from './components/Home';
import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
       <Routes>
           <Route exact path="/" element={<Home/>}></Route>
           <Route exact path='/staff' element={<Staffportal/>}></Route>
           <Route exact path='/staff/login' element={<Stafflogin/>}></Route>
           <Route exact path='/staff/register' element={<StaffRegister/>}></Route>
           <Route exact path='/staff/add-course' element={<AddCourse/>}></Route>
           <Route exact path='/staff/courses' element={<StaffCourse/>}></Route>
           <Route exact path='/staff/students' element={<StaffStudent/>}></Route>
           <Route exact path='/student' element={<StudentPortal/>}></Route>
           <Route exact path='/student/login' element={<StudentLogin/>}></Route>
           <Route exact path='/student/register' element={<StudentRegister/>}></Route>
           <Route exact path='/student/subscriptions' element={<StudentSubscriptions/>}></Route>
           <Route exact path='/student/courses' element={<StudentCourses/>}></Route>
       </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

