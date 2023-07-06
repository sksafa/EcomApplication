import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPass from "./Pages/ForgotPass";
import ResatePass from "./Pages/ResatePass";
import { useSelector } from "react-redux";
import Spinner from "./Components/Spinner";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/Profile";
import ApplyDoctor from "./Pages/ApplyDoctor";
import NotificationPage from "./Pages/NotificationPage";
import Users from "./Pages/Admin/Users";
import Doctors from "./Pages/Admin/Doctors";
import DoctorProfile from "./Pages/Doctor/Profile";
import DoctorsList from "./Pages/DoctorsList";
import AppointmentPage from "./Pages/AppointmentPage";
import AppointmentList from "./Pages/AppointmentList";
import DoctorAppointment from "./Pages/Doctor/DoctorAppointment";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/apply_doctor"
              element={
                <ProtectedRoute>
                  <ApplyDoctor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/appointment-page"
              element={
                <ProtectedRoute>
                  <AppointmentPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/appointment-list"
              element={
                <ProtectedRoute>
                  <AppointmentList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor-appointment"
              element={
                <ProtectedRoute>
                  <DoctorAppointment />
                </ProtectedRoute>
              }
            />

            <Route
              path="/all_doctor_list"
              element={
                <ProtectedRoute>
                  <DoctorsList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/profile/:id"
              element={
                <ProtectedRoute>
                  <DoctorProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/doctors"
              element={
                <ProtectedRoute>
                  <Doctors />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notification"
              element={
                <ProtectedRoute>
                  <NotificationPage />
                </ProtectedRoute>
              }
            />

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
            <Route path="/forgotpassword" element={<ForgotPass />} />
            <Route path="/resatepass" element={<ResatePass />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
