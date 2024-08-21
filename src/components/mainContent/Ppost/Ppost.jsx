import React from "react"
import { useState, useEffect } from "react"
import Slider from "react-slick"
import Heading from "../../common/heading/Heading"
import "./ppost.scss"

const Ppost = () => {

    const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://newsdata.io/api/1/news?country=us&apikey=pub_498246d698aa1c75ec2020ec9f781f66edf3e&category=food';

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
  }, []); // Only run once, as we always fetch lifestyle news


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
        responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        },
      },
    ],

  }
  return (
    <>
      <section className='popularPost'>
        <Heading title='Food' />
        <div className='content'>
          <Slider {...settings}>
            {news.map((val) => {
              return (
                <div key={val.article_id} className='items'>
                  <a href={val.source_url}>
                  <div className='box shadow'>
                    <div className='images'>
                      <div className='img'>
                        <img src={val.image_url} alt='' />
                      </div>
                      <div className='category category1'>
                        <span>{val.category}</span>
                      </div>
                    </div>
                    <div className='text'>
                      <h2 className='title'>{val.title.slice(0, 40)}...</h2>
                      <div className='date'>
                        <i className='fas fa-calendar-days'></i>
                        <label>{val.pubDate}</label>
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

export default Ppost