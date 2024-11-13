import React from 'react';
import './UserProfile.css';
const UserProfile = () => {
const userData = {
name: 'XYZ',
email: 'xyz@example.com',
location: 'Mumbai, India',
profession: 'Software Engineer',
};
return (
<div className="user-profile">
<h2>User Profile</h2>
<div className="profile-card">
<h3>{userData.name}</h3>
<p><strong>Email:</strong> {userData.email}</p>
<p><strong>Location:</strong> {userData.location}</p>
<p><strong>Profession:</strong> {userData.profession}</p>
<button className="edit-profile-btn">Edit Profile</button>
</div>
</div>
);
};
export default UserProfile;