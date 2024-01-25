import './Profile.css';

function Profile({ info }) {
    return (
        <div className="container">
            <img className="background-image" src={info.background} alt="Background Picture" />
            <img className="profile-image" src={info.profile} alt="Profile Picture" />
            <main className="main-section">
                <div className="name-age-container">
                    <div className="name">{info.Name}</div>
                    <div className="age">{info.age}</div>
                </div>
                <div className="place">{info.place}</div>
            </main>
            <footer className="footer">
                <div className="footer-item">
                    <div className="footer-value">{info.followers}</div>
                    <div>Followers</div>
                </div>
                <div className="footer-item">
                    <div className="footer-value">{info.likes}</div>
                    <div>Likes</div>
                </div>
                <div className="footer-item">
                    <div className="footer-value">{info.following}</div>
                    <div>Following</div>
                </div>
            </footer>
        </div>
    );
}

export default Profile;
