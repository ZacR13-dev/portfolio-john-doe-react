import React, { useEffect, useState } from 'react';

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
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Mon profil GitHub</h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              {loading ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Chargement...</span>
                </div>
              ) : githubData ? (
                <>
                  <img 
                    src={githubData.avatar_url} 
                    alt={githubData.name || githubData.login}
                    className="rounded-circle mb-3"
                    style={{width: '150px', height: '150px'}}
                  />
                  <h5>
                    <i className="bi bi-person-fill me-2"></i>
                    {githubData.name || githubData.login}
                  </h5>
                  {githubData.location && (
                    <p>
                      <i className="bi bi-geo-alt-fill me-2"></i>
                      {githubData.location}
                    </p>
                  )}
                  {githubData.bio && (
                    <p className="text-muted">
                      <i className="bi bi-card-text me-2"></i>
                      {githubData.bio}
                    </p>
                  )}
                  <p>
                    <i className="bi bi-folder-fill me-2"></i>
                    Repositories : {githubData.public_repos}
                  </p>
                  <p>
                    <i className="bi bi-people-fill me-2"></i>
                    Followers : {githubData.followers}
                  </p>
                  <p>
                    <i className="bi bi-person-check-fill me-2"></i>
                    Following : {githubData.following}
                  </p>
                </>
              ) : (
                <p className="text-danger">Erreur lors du chargement des données</p>
              )}
            </div>
            <div className="modal-footer">
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