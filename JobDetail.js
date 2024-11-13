// src/pages/JobDetail.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './JobDetail.css';

const JobDetail = () => {
    const navigate = useNavigate();
    const { jobId } = useParams();

    // Mock data for job details (you could fetch real data here)
    const job = {
        id: jobId,
        title: 'UI/UX Designer',
        location: 'New York, NY',
        description: 'A detailed description of the job goes here. This includes job responsibilities, qualifications, etc.',
        requirements: ['Experience with Figma and Sketch', 'Good communication skills', 'Team player']
    };

    return (
        <div className="job-detail">
            <h2>{job.title}</h2>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <ul>
                <strong>Requirements:</strong>
                {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                ))}
            </ul>
            <button className="back-btn" onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    );
};

export default JobDetail;
