import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ForgotPass from './Pages/ForgotPass';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgotpassword' element={<ForgotPass/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
