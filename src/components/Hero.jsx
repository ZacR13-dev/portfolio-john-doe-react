import React from 'react';

// Hero banner component displayed on the home page
function Hero({ onShowModal }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        <button 
          className="btn btn-danger btn-lg btn-hero"
          onClick={onShowModal}
        >
          En savoir plus
        </button>
      </div>
    </section>
  );
}

export default Hero;