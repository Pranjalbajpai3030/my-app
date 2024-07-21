import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import './SocialShare.css';

const SocialShare = ({ articleUrl, articleTitle }) => {
  const [hovered, setHovered] = useState(null);

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}&quote=${encodeURIComponent(articleTitle)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(articleTitle)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(articleUrl)}&title=${encodeURIComponent(articleTitle)}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle)}%20${encodeURIComponent(articleUrl)}`, '_blank');
  };

  const handleMouseEnter = (platform) => {
    setHovered(platform);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const getIcon = (platformIcon) => (hovered === platformIcon ? faShareAlt : platformIcon);

  return (
    <div className="social-share">
      <button
        onClick={shareOnFacebook}
        className="social-button"
        onMouseEnter={() => handleMouseEnter(faFacebook)}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={getIcon(faFacebook)} />
      </button>
      <button
        onClick={shareOnTwitter}
        className="social-button"
        onMouseEnter={() => handleMouseEnter(faTwitter)}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={getIcon(faTwitter)} />
      </button>
      <button
        onClick={shareOnLinkedIn}
        className="social-button"
        onMouseEnter={() => handleMouseEnter(faLinkedin)}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={getIcon(faLinkedin)} />
      </button>
      <button
        onClick={shareOnWhatsApp}
        className="social-button"
        onMouseEnter={() => handleMouseEnter(faWhatsapp)}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={getIcon(faWhatsapp)} />
      </button>
    </div>
  );
};

export default SocialShare;
