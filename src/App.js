
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './assets/background/testeTron.png';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <section
        className="hero-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Hero />
      </section>
    </div>
  );
}

export default App;