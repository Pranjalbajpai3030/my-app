import React from 'react';

import SocialShare from './SocialShare';

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    // Style for the card and image
    const cardStyle = {
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        height: '100%',
    };

    // Function to truncate text
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        } else {
            return text;
        }
    };

    // Function to handle image size
    const handleImageSize = (url) => {
        // Check if imageUrl exists and set default image if not
        if (!url) {
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41XYebbtpJpTR0lQzBbn_TiFDp2lLMzZAgw&s";
        }

        // Check if image is larger than desired size and crop
        return url; // Add your logic here to handle image size
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
                    <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-primary" style={{ backgroundColor: '#7091e6', color: '#fff' }}>Read More</a>
                    <SocialShare articleUrl={newsUrl} articleTitle={title} />
                   
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
