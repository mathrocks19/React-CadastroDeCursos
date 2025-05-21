import React from 'react';
import logoSrc from '../../assets/logo/_.svg'; 
import logoNomeSrc from '../../assets/logo/logoNome.svg'; 

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top p-3">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logoSrc}
            alt="Ícone do Logo"
            style={{ height: '30px', width: 'auto', marginRight: '8px' }}
          />
          <img
            src={logoNomeSrc}
            alt="Nome do Logo"
            style={{ height: '25px', width: 'auto' }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavContent" 
          aria-controls="navbarNavContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavContent"> 
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home"> 
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;