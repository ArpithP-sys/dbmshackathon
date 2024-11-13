// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">JobMatch</div>
            <ul className="navbar-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/jobs">Job list</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/mentorship">Mentorship</Link></li>
                <li><Link to="/register">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
