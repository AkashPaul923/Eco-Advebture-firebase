import React from 'react';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    return (
        <div>
            My Profile
            <Link to="/updateprofile">update profile</Link>
        </div>
    );
};

export default MyProfile;