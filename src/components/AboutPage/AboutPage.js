import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div className="about">
      <p>
        Welcome to Hey, Pup! A play-dating app for dogs. Finding friends for
        your furry pal can be tough. Let us help you find a match.
      </p>
    </div>
  </div>
);

export default AboutPage;
