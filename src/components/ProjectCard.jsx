import React from 'react';

function ProjectCard({ image, title, description, technologies, link }) {
  return (
    <div className="card h-100 portfolio-card">
      <img 
        src={image} 
        className="card-img-top" 
        alt={title}
        style={{height: '200px', objectFit: 'cover'}}
      />
      <div className="card-body d-flex flex-column text-center">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted flex-grow-1">{description}</p>
        <div>
          <a 
            href={link} 
            className="btn btn-primary"
          >
            Voir le site
          </a>
        </div>
      </div>
      {/* Section technologies avec bordure en haut */}
      <div className="card-footer bg-white text-center border-top">
        <small className="text-muted">{technologies}</small>
      </div>
    </div>
  );
}

export default ProjectCard;