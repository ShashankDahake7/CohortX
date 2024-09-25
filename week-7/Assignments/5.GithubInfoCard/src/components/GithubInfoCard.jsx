import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubInfoCard = ({ username }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}`);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching GitHub data:', error.message);
            }
        };
        fetchData();
    }, [username]);

    // Conditional rendering to avoid null errors
    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} /><br />
            {userData.login}<br />
            {userData.bio}<br />
            {userData.type}<br />
        </div>
    );
};

export default GitHubInfoCard;
