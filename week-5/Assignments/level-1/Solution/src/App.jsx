import React from 'react';
import BusinessCard from '../component/BusinessCard';

function App() {
  const businessCardData = {
    name: 'Shashank',
    description: 'Frontend Developer',
    interests: ['React', 'JavaScript', 'Web Development'],
    linkedin: 'https://www.linkedin.com/in',
    twitter: 'https://twitter.com',
    otherSocialMedia: {
      url: 'https://www.instagram.com',
      label: 'Instagram',
    },
  };

  return (
    <div>
      <BusinessCard {...businessCardData} />
    </div>
  );
}

export default App;