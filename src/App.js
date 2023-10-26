import React from 'react';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
