import React from 'react';

function HeroSection() {
  return (
    <section className="hero" style={{ backgroundImage: "url('./assets/beachimage.jpg')" }}>
      <div className="hero-content">
        <h2>GREAT SUMMER SALE</h2>
        <p>Your favorite place for online shopping</p>
        <p>SHOP NOW</p>
      </div>
    </section>
  );
}

export default HeroSection;
