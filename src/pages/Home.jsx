import React, { useState } from 'react';
import Hero from '../components/Hero';
import GitHubModal from '../components/GitHubModal';

// Home page — displays hero section, about, skills and GitHub modal
function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Hero onShowModal={() => setShowModal(true)} />
      
      {/* Section À propos + Compétences */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row bg-white shadow-lg p-5">
            {/* Colonne À propos */}
            <div className="col-md-6 mb-4">
              <h2 className="section-title-home mb-4">A propos</h2>
              <img 
                src="/images/john-doe-about.jpg" 
                alt="John Doe" 
                className="img-fluid mb-3"
              />
              <p className="fw-semibold">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus 
                consectetur tempore nostrum, ex delectus recusandis impedit enim placeat? Natus, neque at?
              </p>
              <p className="fw-semibold">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus 
                consectetur tempore nostrum, ex delectus recusandis impedit enim placeat? Natus, neque at?
              </p>
              <p className="fw-semibold">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus 
                consectetur tempore nostrum, ex delectus recusandis impedit enim placeat? Natus, neque at?
              </p>
            </div>

            {/* Colonne Compétences */}
            <div className="col-md-6">
              <h2 className="section-title-home mb-4">Mes compétences</h2>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold">HTML5 90%</span>
                </div>
                <div className="progress" style={{height: '25px', borderRadius: '10px'}}>
                  <div 
                    className="progress-bar bg-danger" 
                    role="progressbar" 
                    style={{width: '90%', borderRadius: '10px'}}
                    aria-valuenow="90" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold">CSS3 80%</span>
                </div>
                <div className="progress" style={{height: '25px', borderRadius: '10px'}}>
                  <div 
                    className="progress-bar bg-info" 
                    role="progressbar" 
                    style={{width: '80%', borderRadius: '10px'}}
                    aria-valuenow="80" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold">JAVASCRIPT 70%</span>
                </div>
                <div className="progress" style={{height: '25px', borderRadius: '10px'}}>
                  <div 
                    className="progress-bar bg-warning" 
                    role="progressbar" 
                    style={{width: '70%', borderRadius: '10px'}}
                    aria-valuenow="70" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold">PHP 60%</span>
                </div>
                <div className="progress" style={{height: '25px', borderRadius: '10px'}}>
                  <div 
                    className="progress-bar bg-success" 
                    role="progressbar" 
                    style={{width: '60%', borderRadius: '10px'}}
                    aria-valuenow="60" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold">REACT 50%</span>
                </div>
                <div className="progress" style={{height: '25px', borderRadius: '10px'}}>
                  <div 
                    className="progress-bar bg-primary" 
                    role="progressbar" 
                    style={{width: '50%', borderRadius: '10px'}}
                    aria-valuenow="50" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GitHubModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default Home;