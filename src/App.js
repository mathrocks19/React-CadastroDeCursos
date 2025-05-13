// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './assets/background/imageOnce.png';
import Header from './components/Header/Header';
import './App.css'; 

function App() {
  return (
    <div className="App"> 
      <Header />

      <section
        className="hero-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-content container text-center">
          <h1>Bem-vindo ao Meu Site Incrível!</h1>
          <p className="lead">
            Descubra nossos produtos e serviços fantásticos.
          </p>
          <button className="btn btn-primary btn-lg mt-3">Saiba Mais</button>
        </div>
      </section>

    </div>
  );
}

export default App;