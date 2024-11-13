// src/pages/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const [appliedJobs] = useState([
        { title: 'Frontend Developer', status: 'Interview Scheduled' },
        { title: 'Backend Developer', status: 'Under Review' }
    ]);

    const [recommendedJobs] = useState([
        { title: 'UI/UX Designer', location: 'Remote' },
        { title: 'Data Scientist', location: 'San Francisco' }
    ]);

    const [recentActivities] = useState([
        'Applied for Frontend Developer position',
        'Saved Data Scientist position for later'
    ]);

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>

            <div className="dashboard-section">
                <h3>Applied Jobs</h3>
                <ul>
                    {appliedJobs.map((job, index) => (
                        <li key={index}>{job.title} - {job.status}</li>
                    ))}
                </ul>
            </div>

            <div className="dashboard-section">
                <h3>Recommended Jobs</h3>
                <ul>
                    {recommendedJobs.map((job, index) => (
                        <li key={index}>{job.title} ({job.location})</li>
                    ))}
                </ul>
            </div>

            <div className="dashboard-section">
                <h3>Recent Activities</h3>
                <ul>
                    {recentActivities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
