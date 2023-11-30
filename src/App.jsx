import React from 'react';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Home from './pages/Home.jsx';

import AppLayout from './components/layout/AppLayout.jsx';
import AdminLayout from './components/layout/AdminLayout.jsx';

import Overview from './pages/Overview.jsx';
import Plan from './pages/Plan.jsx';
import Result from './pages/Result.jsx';
import Score from './pages/Score.jsx';
import Subject from './pages/Subject.jsx';
import User from './pages/User.jsx';
import CreateUser from './pages/CreateUser.jsx';
import CreateSubject from './pages/CreateSubject.jsx';

import { useAppContext } from './utils/GlobalContext.js';

function App() {

  const { subjects } = useAppContext();

  console.log(subjects);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route>
          <Route index element={<Home/>}/>
        </Route> */}
        <Route path='/'>
            <Route index element={<Home/>}/>
        </Route>
        {/* <Route path='/' element={<AuthLayout/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
        </Route> */}
        
        <Route path='/' element={<AdminLayout/>}>
            <Route path='manager_super_admin/subject' element={<Subject/>}/>
            <Route path='manager_super_admin/subject/create' element={<CreateSubject/>}/>
            <Route path='manager_super_admin/user' element={<User/>}/>
            <Route path='manager_super_admin/user/create' element={<CreateUser/>}/>
            <Route path='manager_super_admin/score' element={<Score/>}/>
        </Route>
        <Route path='/' element={<AppLayout/>}>
            <Route path='overview' data={subjects} element={<Overview/>}/>
            <Route path='plan' element={<Plan/>}/>
            <Route path='result' element={<Result/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
