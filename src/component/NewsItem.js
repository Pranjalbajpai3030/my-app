import React  from 'react';

const NewsItem =(props)=> {
   
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        const boxShadowStyle = {
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
        };
        return (
            <div className="my-3">
           

                <div className="card" style={boxShadowStyle}>
                <div>
            <span
                        className="badge rounded-pill"
                        style={{ backgroundColor: '#3D5280', display :'flex' , justifyContent :'flex-end',position:'absolute',right:'0' }}
                    >
                        {source}
                    </span>
            </div>
                    

                    <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41XYebbtpJpTR0lQzBbn_TiFDp2lLMzZAgw&s"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small class="text-body-secondary">By <span style={{ color: 'blue' }}>{author ? author : 'Unknown'}</span> on <span style={{ color: 'red' }}>{new Date(date).toGMTString()}</span></small></p>

                        <a rel='noreferrer' href={newsUrl} target='blank' className="btn btn-sm btn-primary" style={{ backgroundColor: '#7091e6', color: '#fff' }}>Read More</a>
                    </div>
                </div>
            </div>
        );
    
}

export default NewsItem;
