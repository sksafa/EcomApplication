import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import Spinner from "./Components/Spinner";
import Doctors from "./Pages/Admin/Doctors";
import Users from "./Pages/Admin/Users";
import AnalyticsPage from "./Pages/AnalyticsPage";
import ApplyDoctor from "./Pages/ApplyDoctor";
import AppointmentPage from "./Pages/AppointmentPage";
import DoctorProfile from "./Pages/Doctor/Profile";
import DoctorAppointmentPage from "./Pages/DoctorAppointmentPage";
import DoctorsList from "./Pages/DoctorsList";
import ForgotPass from "./Pages/ForgotPass";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotificationPage from "./Pages/NotificationPage";
import AdminProfilePage from "./Pages/Profile/AdminProfilePage";
import Register from "./Pages/Register";
import ResatePass from "./Pages/ResatePass";

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
                  <AnalyticsPage/>
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin_profile"
              element={
                <ProtectedRoute>
                   <AdminProfilePage />
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
              path="/dashbord_analytics"
              element={
                <ProtectedRoute>
                  <AnalyticsPage />
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
              path="/doctor_appointment"
              element={
                <ProtectedRoute>
                  <DoctorAppointmentPage />
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
