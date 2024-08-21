import React, { useState, useEffect } from 'react';
import WorldNewsItem from './WorldNewsItem';
import "../../../App.css"

const WorldNews = ({category, anodaBoardRef}) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const url = `https://newsdata.io/api/1/latest?country=us&apikey=pub_498246d698aa1c75ec2020ec9f781f66edf3e&category=${category}`;
        
        
try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
       const result = await response.json();

        // Check if result.data is an array and set it to state.
        if (result.results && Array.isArray(result.results)) {
          setNews(result.results);
        } else {
          setError('Unexpected response format');
        }
      }  catch (error) {
        setError(error.message);
    }
};

    fetchData();
  }, [category]);

  return (
      <div className="mt-3" ref={anodaBoardRef}>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {error ? (
        <p style={{textAlign: 'center'}}>{error}</p>
      ) : news.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="news-container">
          {news.map((data, index) => (
            <WorldNewsItem
              key={data.article_id}
              title={data.title}
              description={data.description}
              src={data.image_url}
              url={data.link}
              date={data.pubDate}
              icon={data.source_icon}
              iconName={data.source_name}

            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorldNews;
