import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './SocialShare.css';

const SocialShare = ({ articleUrl, articleTitle }) => {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}&quote=${encodeURIComponent(articleTitle)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(articleTitle)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(articleUrl)}&title=${encodeURIComponent(articleTitle)}`, '_blank');
  };

  return (
    <div className="social-share">
      <button onClick={shareOnFacebook} className="social-button">
        <FontAwesomeIcon icon={faFacebook} />
      </button>
      <button onClick={shareOnTwitter} className="social-button">
        <FontAwesomeIcon icon={faTwitter} />
      </button>
      <button onClick={shareOnLinkedIn} className="social-button">
        <FontAwesomeIcon icon={faLinkedin} />
      </button>
    </div>
  );
};

export default SocialShare;
