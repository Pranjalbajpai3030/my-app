import React, { useState } from 'react';
import SocialShare from './SocialShare';
import './NewsItem.css';

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    const [selectedLanguage, setSelectedLanguage] = useState('hi');

    const languages = [
        { code: 'hi', name: 'Hindi' },
        { code: 'bn', name: 'Bengali' },
        { code: 'ta', name: 'Tamil' },
        { code: 'te', name: 'Telugu' },
        { code: 'kn', name: 'Kannada' },
        { code: 'ml', name: 'Malayalam' },
        // Add more Indian languages as needed
    ];

    const cardStyle = {
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        height: '100%',
    };

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        } else {
            return text;
        }
    };

    const handleImageSize = (url) => {
        if (!url) {
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41XYebbtpJpTR0lQzBbn_TiFDp2lLMzZAgw&s";
        }
        return url;
    };

    const handleReadMore = (url, lang) => {
        const googleTranslateUrl = `https://translate.google.com/translate?hl=${lang}&sl=auto&tl=${lang}&u=${encodeURIComponent(url)}`;
        window.open(googleTranslateUrl, '_blank');
    };

    return (
        <div className="my-3 d-flex justify-content-center">
            <div className="card" style={cardStyle}>
                <div>
                    <span className="badge rounded-pill" style={{ backgroundColor: '#3D5280', display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        {source}
                    </span>
                </div>
                <img src={handleImageSize(imageUrl)} className="card-img-top" alt="..." style={{ objectFit: 'cover', height: '200px' }} />
                <div className="card-body">
                    <h5 className="card-title">{truncateText(title, 50)}</h5>
                    <p className="card-text">{truncateText(description, 120)}</p>
                    <p className="card-text"><small className="text-body-secondary">By <span style={{ color: 'blue' }}>{author ? author : 'Unknown'}</span> on <span style={{ color: 'red' }}>{new Date(date).toGMTString()}</span></small></p>
                    <div className="read-more-container">
                        <button
                            onClick={() => handleReadMore(newsUrl, selectedLanguage)}
                            className="read-more-button"
                        >
                            Read More
                        </button>
                        <div className="translate-section">
                            <select className="translate-select" onChange={(e) => setSelectedLanguage(e.target.value)} value={selectedLanguage}>
                                {languages.map((lang) => (
                                    <option key={lang.code} value={lang.code}>
                                        {lang.name}
                                    </option>
                                ))}
                            </select>
                            <button className="translate-button" onClick={() => handleReadMore(newsUrl, selectedLanguage)}>
                                Translate to {languages.find(lang => lang.code === selectedLanguage).name}
                            </button>
                        </div>
                    </div>
                    <SocialShare articleUrl={newsUrl} articleTitle={title} />
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
