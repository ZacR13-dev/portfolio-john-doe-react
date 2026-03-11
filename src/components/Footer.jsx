import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Colonne 1 : Coordonnées */}
          <div className="col-md-4 mb-4">
          <h3 className="mb-3">John Doe</h3>
          <p className="mb-1">40 rue Laure Diebold</p>
          <p className="mb-1">69009 Lyon, France</p>
          <p className="mb-1">10 20 30 40 50</p>
          <p className="mb-3">john.doe@gmail.com</p>
            <div className="social-icons">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="text-secondary me-3"
              >
                <i className="bi bi-github fs-4"></i>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="text-secondary me-3"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="text-secondary"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens utiles */}
          <div className="col-md-4 mb-4">
            <h3 className="mb-3">Liens utiles</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white footer-link">Accueil</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white footer-link">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="text-white footer-link">Portfolio</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white footer-link">Me contacter</Link>
              </li>
              <li className="mb-2">
                <Link to="/mentions-legales" className="text-white footer-link">Mentions légales</Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Dernières réalisations */}
          <div className="col-md-4 mb-4">
            <h3 className="mb-3">Mes dernières réalisations</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/portfolio" className="text-white footer-link">Fresh Food</Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="text-white footer-link">Restaurant Akira</Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="text-white footer-link">Espace bien-être</Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="text-white footer-link">SEO</Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="text-white footer-link">Création d'une API</Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="text-white footer-link">Maquette d'un site</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;