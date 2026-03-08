import React from 'react';
import ServiceCard from '../components/ServiceCard';

function Services() {
  const services = [
    {
      icon: 'bi-brush',
      title: 'UX Design',
      description: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."
    },
    {
      icon: 'bi-code-slash',
      title: 'Développement web',
      description: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."
    },
    {
      icon: 'bi-search',
      title: 'Référencement',
      description: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
    }
  ];

  return (
    <>
      {/* Banner */}
      <section className="banner-section d-flex align-items-center justify-content-center">
      </section>

      {/* Titre et Services */}
      <section className="py-5">
        <div className="container">
          <h1 className="mb-3 text-center">Mon offre de services</h1>
          <p className="section-title-center text-muted mb-5 text-center">Voici les prestations sur lesquelles je peux intervenir</p>
          
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-4 d-flex align-items-stretch">
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
    );
  }

export default Services;