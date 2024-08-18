import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlay, faEdit, faMoon, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import beatBlissImage from '../assets/img.jpg';  // Adjust path based on your structure

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About BeatBliss</h2>
      <div className="about-content">
        <div className="image-container">
          <img
            src={beatBlissImage}
            alt="BeatBliss"
            className="about-image"
          />
          <div className="overlay-text">BeatBliss</div>
        </div>

        <div className="about-description">
          <p>
            Welcome to <strong>BeatBliss</strong>! Discover and enjoy music like never before.
          </p>
          <p>
            BeatBliss lets you browse, play, and manage your favorite songs with ease. Explore our extensive library powered by the iTunes API.
          </p>
          <div className="features">
            <h3>With BeatBliss, you can:</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faSearch} className="feature-icon" />
                Discover new music with our intuitive interface.
              </li>
              <li>
                <FontAwesomeIcon icon={faPlay} className="feature-icon" />
                Play and save songs to your playlist.
              </li>
              <li>
                <FontAwesomeIcon icon={faEdit} className="feature-icon" />
                Manage your playlist effortlessly.
              </li>
              <li>
                <FontAwesomeIcon icon={faMoon} className="feature-icon" />
                Switch between light and dark modes.
              </li>
              <li>
                <FontAwesomeIcon icon={faShareAlt} className="feature-icon" />
                Share playlists with friends via unique URLs.
              </li>
            </ul>
          </div>
          <p>
            We hope you love BeatBliss as much as we do!
          </p>
          <p>
            Questions or feedback? Contact us at <a href="mailto:support@beatbliss.com">support@beatbliss.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
