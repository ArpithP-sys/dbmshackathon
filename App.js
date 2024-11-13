// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import UserProfile from './components/UserProfile';
import Register from './components/Register';
import Mentorship from './components/Mentorship';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <div className="main-content">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/jobs" element={<JobList />} />
                        <Route path="/job/:jobId" element={<JobDetail />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/profile" element={<UserProfile />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/mentorship" element={<Mentorship />} />
                        {/* Additional routes can be added as needed */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

