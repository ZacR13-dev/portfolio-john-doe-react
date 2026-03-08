import React from 'react';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="card h-100 text-center p-4 shadow-sm" style={{border: '1px solid #dee2e6'}}>
      <div className="card-body">
        <i className={`bi ${icon} text-primary`} style={{fontSize: '3rem'}}></i>
        <h5 className="card-title mt-3 mb-3 fw-bold">{title}</h5>
        <p className="card-text text-muted">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;