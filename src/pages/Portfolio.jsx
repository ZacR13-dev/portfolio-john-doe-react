import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  const projects = [
    {
      image: '/images/portfolio/fresh-food.jpg',
      title: 'Fresh Food',
      description: 'Site de vente de produits frais en ligne',
      technologies: 'Site réalisé avec PHP et MySQL',
      link: '#'
    },
    {
      image: '/images/portfolio/restaurant-japonais.jpg',
      title: 'Restaurant Akira',
      description: 'Site de vente de produits frais en ligne',
      technologies: 'Site réalisé avec WordPress',
      link: '#'
    },
    {
      image: '/images/portfolio/espace-bien-etre.jpg',
      title: 'Espace bien-être',
      description: 'Site de vente de produits frais en ligne',
      technologies: 'Site réalisé avec LARAVEL',
      link: '#'
    },
    {
      image: '/images/portfolio/seo.jpg',
      title: 'SEO',
      description: "Amélioration du référencement d'un site e-commerce",
      technologies: 'Utilisation des outils SEO',
      link: '#'
    },
    {
      image: '/images/portfolio/coder.jpg',
      title: "Création d'une API",
      description: "Création d'une API REST-FULL publique",
      technologies: 'PHP - SYMFONY',
      link: '#'
    },
    {
      image: '/images/portfolio/screens.jpg',
      title: "Maquette d'un site web",
      description: "Création du prototype d'un site",
      technologies: 'Réalisé avec FIGMA',
      link: '#'
    }
  ];

  return (
    <>
      {/* Banner */}
      <section className="banner-section d-flex align-items-center justify-content-center">
      </section>

      {/* Titre et Portfolio */}
      <section className="py-5">
        <div className="container">
          <h1 className="mb-3 text-center">Portfolio</h1>
          <p className="section-title-center text-muted mb-5 text-center">Voici quelques-unes de mes réalisations</p>
          
          <div className="row g-4">
            {projects.map((project, index) => (
              <div key={index} className="col-md-4">
                <ProjectCard 
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;