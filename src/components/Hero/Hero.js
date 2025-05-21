import React from 'react';
import './Hero.css'; 
import heroManImage from '../../assets/background/circuloHomem.png';

const Hero = () => { 


  return (
    <section
      id="home" 
      className="home-section d-flex justify-content-lg-between flex-column flex-lg-row position-relative w-100 overflow-hidden"
    >


      {/* Conteúdo Principal */}
      <div className="home-content-container d-flex align-items-center justify-content-center flex-column flex-md-row position-relative">
        <div className="home-hero-image-wrapper position-relative w-100 d-flex justify-content-center ">
          <img
            className="home-hero-image rounded"
            alt="Man in a circle"
            src={heroManImage} 
          />
        </div>

        <div className="home-text-content d-flex flex-column fw-bold position-relative">
          <h1 className="home-title-matheus text-uppercase lh-1">
            Matheus
          </h1>
          <h1 className="home-title-viana text-uppercase lh-1">
            Viana
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero; 