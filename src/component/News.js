import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import truncate from 'truncate';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = `${props.searchQuery ? 'Search' : props.category} - News Express`;
    updateNews();
  }, [props.searchQuery, props.category, props.country]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/${props.searchQuery ? `everything?q=${props.searchQuery}` : `top-headlines?country=${props.country}&category=${props.category}`}&apiKey=3027806966fc4a6daf7688dd944eef6f&page=${nextPage}&pageSize=${props.pageSize}`;
    
    console.log('Fetching URL:', url);
    
    try {
      let response = await fetch(url);
      console.log('Response Status:', response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();
      setArticles([...articles, ...data.articles]);
      setTotalResults(data.totalResults);
      setPage(nextPage);
    } catch (error) {
      setError(`Error fetching more news: ${error.message}`);
      console.error('Fetching more news failed:', error);
    }
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/${props.searchQuery ? `everything?q=${props.searchQuery}` : `top-headlines?country=${props.country}&category=${props.category}`}&apiKey=3027806966fc4a6daf7688dd944eef6f&page=${page}&pageSize=${props.pageSize}`;
    try {
      setLoading(true);
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let data = await response.json();
      props.setProgress(30);
      setArticles(data.articles);
      setTotalResults(data.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      setError('Error updating news.');
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="container my-3">
      <h1 style={{ marginTop: '70px', marginBottom: '35px', color: '#3D5280', transition: 'color 0.5s ease', textAlign: 'center' }}>
        {props.searchQuery ? `Search Results for "${props.searchQuery}"` : <span style={{ color: 'red' }}>{props.category}</span>} Top News
      </h1>
      {loading && <Spinner />}
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
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
                  searchQuery={props.searchQuery}
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
  searchQuery: PropTypes.string,
};

export default News;
