import React from "react"
import { useState, useEffect } from "react"
import "./Popular.scss"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Heading from "../../common/heading/Heading"

const Popular = () => {

    const [news, setNews] = useState([]); // Corrected setNews
  const [error, setError] = useState(''); // error handling

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://newsdata.io/api/1/latest?country=gb&apikey=pub_498246d698aa1c75ec2020ec9f781f66edf3e';

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        // Check if result.results is an array and filter out articles without images
        if (result.results && Array.isArray(result.results)) {
          const filteredNews = result.results.filter(article => article.image_url);
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


  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  }
  return (
    <>
      <section className='popular'>
        <Heading title='Popular' />
        <div className='content'>
          <Slider {...settings}>
            {news.map((val) => {
              return (
                <div key={val.article_id} className='items'>
                  <a href={val.source_url}>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img src={val.image_url} alt='' />
                      </div>
                      <div className='category category1'>
                        <span>{val.category}</span>
                      </div>
                     </div>
                     <div className='text row'>
                        <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                      <div className='date'>
                        <i className='fas fa-calendar-days'></i>
                        <label>{val.pubDate}</label>
                      </div>
                      <div className='comment'>
                        <i className='fas fa-comments'></i>
                      </div>
                    </div>
                    </div>
                  </a>

                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Popular