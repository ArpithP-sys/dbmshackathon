import React, { useState } from 'react';
import './JobList.css';
const JobList = () => {
const [jobs] = useState([
{ id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote', postedDate:
'2024-11-01' },
{ id: 2, title: 'Backend Developer', company: 'Innovate Labs', location: 'New York',
postedDate: '2024-11-05' },
{ id: 3, title: 'Data Scientist', company: 'DataHub', location: 'San Francisco', postedDate:
'2024-11-08' }
]);
return (
<div className="job-list">
<h2>Available Job Listings</h2>
{jobs.map((job) => (
<div key={job.id} className="job-card">
<h3>{job.title}</h3>
<p><strong>Company:</strong> {job.company}</p>
<p><strong>Location:</strong> {job.location}</p>
<p><strong>Posted:</strong> {job.postedDate}</p>
  <Link to={`/job/${job.id}`} className="apply-btn">
                            View Details
                        </Link>
</div>
))}
</div>
);
};
export default JobList;