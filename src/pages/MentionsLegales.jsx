import React, { useEffect } from 'react';

function MentionsLegales() {
  useEffect(() => {
    // Empêche l'indexation de cette page
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="text-center section-title mb-5">Mentions légales</h1>
        
        <div className="accordion" id="mentionsAccordion">
          {/* Éditeur du site */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Éditeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <h5>John Doe</h5>
                <p>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  40 rue Laure Diebold
                </p>
                <p>
                  <i className="bi bi-geo-fill me-2"></i>
                  69009 Lyon, France
                </p>
                <p>
                  <i className="bi bi-telephone-fill me-2"></i>
                  10 20 30 40 50
                </p>
                <p>
                  <i className="bi bi-envelope-fill me-2"></i>
                  john.doe@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Hébergeur */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <h5>alwaysdata</h5>
                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <p>
                  <i className="bi bi-globe me-2"></i>
                  <a 
                    href="https://www.alwaysdata.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    www.alwaysdata.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Crédits */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <h5>Crédits</h5>
                <p>
                  Ce site a été réalisé par John Doe, étudiant au{' '}
                  <a 
                    href="https://www.centre-europeen-formation.fr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    Centre Européen de formation
                  </a>.
                </p>
                <p>
                  <em>
                    Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site{' '}
                    <a 
                      href="https://pixabay.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Pixabay
                    </a>
                  </em>
                </p>
                <p>
                  <em>
                    La favicon de ce site a été fournie par{' '}
                    <a 
                      href="https://www.flaticon.com/free-icons/john-doe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      John doe Icons erstellt von Freepik - Flaticon
                    </a>
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentionsLegales;