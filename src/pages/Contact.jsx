import React from 'react';

// Contact page — displays a contact form, address details and a Google Maps embed
function Contact() {
  // Handle form submission (demo only)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulaire soumis ! (fonction de démonstration)');
  };

  return (
    <>
      {/* Banner */}
      <section className="banner-section d-flex align-items-center justify-content-center">
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          <h1 className="mb-3 text-center">Contact</h1>
          <p className="section-title-center text-muted mb-5 text-center">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
          <div className="row">
            {/* Formulaire */}
            <div className="col-md-6 mb-4">
              <h2 className="section-title text-start mb-4">Formulaire de contact</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nom</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Votre adresse email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="Votre numéro de téléphone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control"
                    placeholder="Sujet"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder="Votre message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </form>
            </div>

            {/* Coordonnées */}
            <div className="col-md-6">
              <h2 className="section-title text-start mb-4">Mes coordonnées</h2>
              <div className="mb-4">
                <h5 className="fw-bold">John Doe</h5>
                <p className="mb-1">
                  <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                  40 rue Laure Diebold
                </p>
                <p className="mb-1">
                  <i className="bi bi-geo-fill me-2 text-primary"></i>
                  69009 Lyon, France
                </p>
                <p className="mb-1">
                  <i className="bi bi-telephone-fill me-2 text-primary"></i>
                  10 20 30 40 50
                </p>
                <p className="mb-3">
                  <i className="bi bi-envelope-fill me-2 text-primary"></i>
                  john.doe@gmail.com
                </p>
              </div>

              {/* Google Maps */}
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621!2d4.796403976544784!3d45.778660871078155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1709652887373!5m2!1sfr!2sfr"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - 40 rue Laure Diebold, Lyon"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;