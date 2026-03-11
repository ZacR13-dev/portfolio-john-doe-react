import { useEffect, useState } from 'react';

// Modal component that fetches and displays GitHub user profile data
function GitHubModal({ show, onClose }) {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch GitHub API data once on component mount
  useEffect(() => {
    fetch('https://api.github.com/users/github-johndoe')
      .then(response => response.json())
      .then(data => {
        setGithubData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur API GitHub:', error);
        setLoading(false);
      });
  }, []);

  if (!show) return null;

  return (
    <>
      <div 
        className="modal show d-block" 
        tabIndex="-1" 
        style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content" style={{backgroundColor: '#212529', color: '#f8f9fa'}}>
            <div className="modal-header" style={{borderBottom: '1px solid #495057', backgroundColor: '#212529'}}>
              <h5 className="modal-title" style={{color: '#f8f9fa'}}>Mon profil GitHub</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{backgroundColor: '#212529'}}>
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Chargement...</span>
                  </div>
                </div>
              ) : githubData ? (
                <div className="row align-items-center">
                  {/* Left column: avatar */}
                  <div className="col-md-5 text-center mb-4 mb-md-0">
                    <img
                      src="/images/Doraemon.png"
                      alt="John Doe"
                      className="img-fluid rounded"
                      style={{width: '100%'}}
                    />
                  </div>
                  {/* Right column: profile info */}
                  <div className="col-md-7">
                    <p className="mb-2 py-2 border-bottom" style={{borderColor: '#495057'}}>
                      <i className="bi bi-person me-2" style={{color: '#f8f9fa'}}></i>
                      <a href="https://github.com/ZacR13-dev/portfolio-john-doe-react" target="_blank" rel="noreferrer" style={{color: '#0d6efd'}}>
                        John Doe
                      </a>
                    </p>
                    <p className="mb-2 py-2 border-bottom" style={{borderColor: '#495057'}}>
                      <i className="bi bi-geo-alt me-2" style={{color: '#f8f9fa'}}></i>
                      {githubData.location}
                    </p>
                    <p className="mb-2 py-2 border-bottom" style={{borderColor: '#495057', color: '#adb5bd'}}>
                      <i className="bi bi-card-text me-2" style={{color: '#f8f9fa'}}></i>
                      As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.
                    </p>
                    <p className="mb-2 py-2 border-bottom" style={{borderColor: '#495057'}}>
                      <i className="bi bi-collection me-2" style={{color: '#f8f9fa'}}></i>
                      Repositories : 1
                    </p>
                    <p className="mb-2 py-2 border-bottom" style={{borderColor: '#495057'}}>
                      <i className="bi bi-people me-2" style={{color: '#f8f9fa'}}></i>
                      Followers : 16
                    </p>
                    <p className="mb-2 py-2">
                      <i className="bi bi-people me-2" style={{color: '#f8f9fa'}}></i>
                      Following : {githubData.following}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-danger text-center">Erreur lors du chargement des données</p>
              )}
            </div>
            <div className="modal-footer" style={{borderTop: '1px solid #495057', backgroundColor: '#212529'}}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GitHubModal;