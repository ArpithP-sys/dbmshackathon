import React, { useState } from 'react';
import './Mentorship.css';
const Mentorship = () => {
const [mentors] = useState([
{ name: 'Virat', expertise: 'Frontend Development', bio: '5+ years in industry', rating: 4.5 },
{ name: 'Vikas', expertise: 'Data Science', bio: 'Passionate about teaching', rating: 4.8 }
]);
return (
<div className="mentorship">
<h2>Mentorship Program</h2>
<div className="mentor-list">
{mentors.map((mentor, index) => (
<div key={index} className="mentor-card">
<h3>{mentor.name}</h3>
<p><strong>Expertise:</strong> {mentor.expertise}</p>
<p>{mentor.bio}</p>
<p><strong>Rating:</strong> {mentor.rating} ⭐</p>
<button className="schedule-btn">Schedule a Session</button>
</div>
))}
</div>
</div>
);
};
export default Mentorship;