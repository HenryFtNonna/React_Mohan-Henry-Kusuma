import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/pages/LandingPage";
import Login from "./components/login";
import Logout from "./components/logout";
import Navbar from "./components/pages/Navbar"
import Dashboard from "./components/pages/Dashboard";
import Table from "./components/pages/Table"
import RekapBulanan from "./components/pages/RekapBulanan"
import PrivateRoute from './components/pages/PrivateRoute';
import Search from "./components/pages/Search";
import About from "./components/pages/About";





function App() {
  const isAuthenticated = !!localStorage.getItem('isLoggedIn');

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/about" element={<PrivateRoute isAuthenticated={isAuthenticated}><About /></PrivateRoute>} />
          <Route path="/search" element={<PrivateRoute isAuthenticated={isAuthenticated}><Search /></PrivateRoute>} />
          <Route path="/table" element={<PrivateRoute isAuthenticated={isAuthenticated}><Table /></PrivateRoute>} />
          <Route path="/rekap-bulanan" element={<PrivateRoute isAuthenticated={isAuthenticated}><RekapBulanan /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute isAuthenticated={isAuthenticated}><Dashboard /></PrivateRoute>} />
        </Routes>
      </Router>
    
    {/* <LandingPage /> */}
    {/* <Login /> */}
    {/* <Navbar /> */}
    {/* <Dashboard /> */}
    {/* <Table /> */}
    {/* <RekapBulanan /> */}

   </div>
  )
}
export default App;