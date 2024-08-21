import React from 'react'
import NaijaNewsItem from './NaijaNewsItem';
import { useState, useEffect } from 'react';
import './naija.scss'
import NaijaNavbar from './NaijaNavbar';


const Naija = () => {
    const [category, setCategory] = useState('business');
    const [active, setActive] = useState(1)
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
    
  useEffect(() => {
    const fetchData = async () => {
        const url = `https://newsdata.io/api/1/latest?country=ng&apikey=pub_498246d698aa1c75ec2020ec9f781f66edf3e&category=${category}`;
        
        
try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();

        // Check if result.data is an array and set it to state
        if (result.results && Array.isArray(result.results)) {
          setNews(result.results);
        } else {
          setError('Unexpected response format');
        }
      } catch (error) {
        setError(error.message);
      }
};

    fetchData();
  }, [category]);

  return (
      <div className="mt-5">
      <h2 className="text-center">
        <span style={{color: "green", fontSize: "42px"}}>Naija </span><span className="badge bg-danger">News</span>
        </h2>

      <NaijaNavbar active={active} setActive={setActive} setCategory={setCategory} />
          
      {error ? (
        <p>{error}</p>
      ) : news.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="news-grid">
          {news.map((data, index) => (
            <NaijaNewsItem
              key={data.article_id || index}
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

export default Naija
