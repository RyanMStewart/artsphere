import React from 'react';
import FeaturedArtworks from '../../components/Gallery/FeaturedArtworks';
import ArtistSpotlight from '../../components/ArtistProfile/ArtistSpotlight';
import Navigation from '../../components/Navigation';

const Home = () => {
  return (
    <div>
      <Navigation />
      <header>
        <h1>Welcome to ArtSphere</h1>
        <p>Explore the best of the art world.</p>
      </header>
      <FeaturedArtworks />
      <ArtistSpotlight />
      {/* Any other home page specific components can go here */}
    </div>
  );
};

export default Home;
