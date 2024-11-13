// Home.js
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/register');
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Our Interactive Job & Internship Platform</h1>
                <p>Find your dream job, connect with mentors, and start your career journey with us!</p>
                <button onClick={handleGetStarted} className="get-started-btn">Get Started</button>
            </header>

            <section className="features-section">
                <h2>Features</h2>
                <div className="features">
                    <div className="feature-card">
                        <h3>Job Listings</h3>
                        <p>Explore a variety of job opportunities tailored to your skills and preferences.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Mentorship Program</h3>
                        <p>Connect with industry experts and enhance your career with one-on-one mentorship.</p>
                    </div>
                    <div className="feature-card">
                        <h3>AI-Powered Recommendations</h3>
                        <p>Receive personalized job and internship suggestions with our AI matching system.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
