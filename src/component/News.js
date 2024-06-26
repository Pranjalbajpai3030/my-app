import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import truncate from 'truncate';
import Spinner from './Spinner.js';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

const News = (props) => {
   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [totalResults, setTotalResults] = useState(0);

   useEffect(() => {
      document.title = `${props.category} - News Express`;
      updateNews();
      // eslint-disable-next-line no-console,
   }, []);

   const fetchMoreData = async () => {
      const nextPage = page + 1;
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3027806966fc4a6daf7688dd944eef6f&page=${nextPage}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setPage(nextPage);
   };

   const updateNews = async () => {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3027806966fc4a6daf7688dd944eef6f&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(50);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
   };

   /*const handlePrevClick = async () => {
      setPage(page - 1);
      updateNews();
   };

   const handleNextClick = async () => {
      setPage(page + 1);
      updateNews();
   };*/

   return (
      <div className="container my-3">
        <div className="container text-center mb-4">
    <img src="logo.png" alt="Logo" className="img-fluid" style={{ maxWidth: '500px', marginTop: '70px' }} />
</div>


         <h1 style={{ marginTop: '70px', marginBottom: '35px', color: '#3D5280', transition: 'color 0.5s ease', textAlign: 'center' }}>
            <span style={{ color: 'red' }}>{props.category}</span> Top News
         </h1>
         {loading && <Spinner />}
         <InfiniteScroll
            pageStart={0}
            loadMore={fetchMoreData}
            hasMore={articles.length < totalResults}
            loader={<Spinner key={0} />}
         >
            <div className="row">
               {articles.map((element) => {
                  if (!element.title || !element.description || !element.urlToImage) {
                     return null;
                  }
                  return (
                     <div className="col-md-4" key={element.url}>
                        <NewsItem
                           title={truncate(element.title, 45)}
                           description={truncate(element.description, 88)}
                           imageUrl={element.urlToImage}
                           newsUrl={element.url}
                           author={element.author}
                           date={element.publishedAt}
                           source={element.source.name}
                        />
                     </div>
                  );
               })}
            </div>
         </InfiniteScroll>
      </div>
   );
};

News.defaultProps = {
   country: 'in',
   pageSize: 8,
   category: 'general',
};

News.propTypes = {
   country: PropTypes.string,
   pageSize: PropTypes.number,
   category: PropTypes.string,
   setProgress: PropTypes.func.isRequired,
};

export default News;
