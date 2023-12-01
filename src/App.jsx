import React from 'react';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Home from './pages/Home.jsx';

import AppLayout from './components/layout/AppLayout.jsx';
import AdminLayout from './components/layout/AdminLayout.jsx';
import AuthLayout from './components/layout/AuthLayout.jsx';

import Overview from './pages/Overview.jsx';
import Plan from './pages/Plan.jsx';
import Result from './pages/Result.jsx';
import Score from './pages/Score.jsx';
import Subject from './pages/Subject.jsx';
import User from './pages/User.jsx';
import CreateUser from './pages/CreateUser.jsx';
import CreateSubject from './pages/CreateSubject.jsx';
import Login from './pages/Login.jsx';
import CreatePlan from './pages/CreatePlan.jsx';
import SubjectDetail from './pages/SubjectDetail.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route>
          <Route index element={<Home/>}/>
        </Route> */}
        <Route path='/'>
            <Route index element={<Home/>}/>
        </Route>
        <Route path='/' element={<AuthLayout/>}>
            <Route path='login' element={<Login/>}/>
        </Route>
        
        <Route path='/' element={<AdminLayout/>}>
            <Route path='manager_super_admin/subject' element={<Subject/>}/>
            <Route path='manager_super_admin/subject/:id' element={<SubjectDetail/>}/>
            <Route path='manager_super_admin/subject/create' element={<CreateSubject/>}/>
            <Route path='manager_super_admin/user' element={<User/>}/>
            <Route path='manager_super_admin/user/create' element={<CreateUser/>}/>
            <Route path='manager_super_admin/subject/:id/student/:user_id' element={<Score/>}/>
        </Route>
        <Route path='/' element={<AppLayout/>}>
            <Route path='overview' element={<Overview/>}/>
            <Route path='plan' element={<Plan/>}/>
            <Route path='plan_create' element={<CreatePlan/>}/>
            <Route path='result' element={<Result/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
