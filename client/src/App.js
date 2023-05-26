import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ForgotPass from './Pages/ForgotPass';
import ResatePass from './Pages/ResatePass';
import { useSelector } from "react-redux";
import Spinner from "./Components/Spinner";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile';
import ApplyDoctor from './Pages/ApplyDoctor';
import ApproveDoctor from './Pages/ApproveDoctor';
import NotificationPage from './Pages/NotificationPage';

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/dashboard'
              element={
                <ProtectedRoute>
                  <HomePage />
                 </ProtectedRoute>
              } />

            <Route
              path='/profile'
              element={
                <ProtectedRoute>
                  <Profile />
                 </ProtectedRoute>
              } />

            <Route
              path='/apply_doctor'
              element={
                <ProtectedRoute>
                  <ApplyDoctor/>
                </ProtectedRoute>
              } />
              <Route
              path='/notification'
              element={
                <ProtectedRoute>
                  <NotificationPage/>
                </ProtectedRoute>
              } />
            <Route
              path='/approve_doctor'
              element={
                <ProtectedRoute>
                  <ApproveDoctor />
                 </ProtectedRoute>
              } />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            {/* <Route path='/forgotpassword/:id/:token' element={<ForgotPass/>}/> */}
            <Route path='/forgotpassword' element={<ForgotPass />} />
            <Route path='/resatepass' element={<ResatePass />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
