import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./hero.css";

const Hero = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const heroUrl = 'https://newsdata.io/api/1/news?country=ca&apikey=pub_498246d698aa1c75ec2020ec9f781f66edf3e';

      try {
        const response = await fetch(heroUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        // Accessing the articles array from the result
        if (result.results && Array.isArray(result.results)) {
          const filteredNews = result.results.filter(result => result.image_url);
          setNews(filteredNews);
        } else {
          setError('Unexpected response format');
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []); // Only run once

  return (
    <>
      <section className='hero'>
        <div className='container'>
          {error && <p>{error}</p>}
          {news.slice(0, 4).map((item, index) => (
            <Card
              key={item.article_id || index} 
              title={item.title}
              src={item.image_url}
              url={item.link}
              date={item.pubDate}
              creator={item.creator}   
              category={item.category}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;
