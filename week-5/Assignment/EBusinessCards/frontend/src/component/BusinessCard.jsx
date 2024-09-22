import React from 'react';
import './BusinessCard.css';

export function BusinessCard(props) {
    return (
        <div className="card">
            <h1 className="name">{props.name}</h1>
            <p className="description">{props.description}</p>
            <h2 className="interestsHeader">Interests</h2>
            <ul className="interestsList">
                {props.interests.map((interest) => (
                    <li key={interest} className="interestItem">
                        {interest}
                    </li>
                ))}
            </ul>
            <div className="socialLinks">
                <a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="link">
                    LinkedIn
                </a>
                <br />
                <a href={props.twitter} target="_blank" rel="noopener noreferrer" className="link">
                    Twitter
                </a>
                {props.otherSocialMedia && (
                    <a href={props.otherSocialMedia} target="_blank" rel="noopener noreferrer" className="link">
                        {props.otherSocialMedia.label}
                    </a>
                )}
            </div>
        </div>
    );
}

export default BusinessCard;
