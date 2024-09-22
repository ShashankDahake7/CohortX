import React, { useState } from 'react';
import axios from 'axios';
import './CardForm.css';

const CardForm = ({ fetchCards }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        linkedin: '',
        twitter: '',
        otherSocialMediaUrl: '',
        otherSocialMediaLabel: '',
        interests: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cardData = {
            name: formData.name,
            description: formData.description,
            linkedin: formData.linkedin,
            twitter: formData.twitter,
            otherSocialMedia: {
                url: formData.otherSocialMediaUrl,
                label: formData.otherSocialMediaLabel,
            },
            interests: formData.interests.split(','),
        };

        await axios.post('http://localhost:3000/card', cardData);
        fetchCards();
        setFormData({ name: '', description: '', linkedin: '', twitter: '', otherSocialMediaUrl: '', otherSocialMediaLabel: '', interests: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
                className="form-input"
            />
            <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn URL"
                value={formData.linkedin}
                onChange={handleChange}
                required
                className="form-input"
            />
            <input
                type="url"
                name="twitter"
                placeholder="Twitter URL"
                value={formData.twitter}
                onChange={handleChange}
                required
                className="form-input"
            />
            <input
                type="url"
                name="otherSocialMediaUrl"
                placeholder="Other Social Media URL"
                value={formData.otherSocialMediaUrl}
                onChange={handleChange}
                className="form-input"
            />
            <input
                type="text"
                name="otherSocialMediaLabel"
                placeholder="Other Social Media Label"
                value={formData.otherSocialMediaLabel}
                onChange={handleChange}
                className="form-input"
            />
            <input
                type="text"
                name="interests"
                placeholder="Interests (comma separated)"
                value={formData.interests}
                onChange={handleChange}
                required
                className="form-input"
            />
            <button type="submit" className="form-button">
                Add Card
            </button>
        </form>
    );
};

export default CardForm;