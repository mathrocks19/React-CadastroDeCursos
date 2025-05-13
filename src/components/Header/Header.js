import React, { useState } from 'react';
import logoSrc from '../../assets/logo/_.svg';
import logoNomeSrc from '../../assets/logo/logoNome.svg';

const Header = () => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

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
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ms-auto">
            <a className="nav-item nav-link active" href="/">Home</a>
            <a className="nav-item nav-link" href="/sobre">Sobre</a>
            <a className="nav-item nav-link" href="/contato">Contato</a>
          </div>
          <button
            type="button"
            className="btn"
            style={{
              backgroundColor: '#9E1DFF',
              color: 'white',
              borderColor: '#9E1DFF',
              borderRadius: '50px',
              padding: '10px'

            }}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;