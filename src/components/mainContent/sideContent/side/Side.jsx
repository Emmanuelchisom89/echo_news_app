import React from "react"
import "./side.scss"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { gallery } from "../../../../dummyData"
import SocialMedia from "../social/SocialMedia"

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const catgeory = ["world", "travel", "sport", "fun", "health", "politics", "business", "technology"]
  return (
    <>
      <Heading title='Stay Connected' />
      <SocialMedia />

      <Heading title='Subscribe' />

      <section className='subscribe'>
        <h1 className='title'>Subscribe to our New Stories</h1>
        <form action=''>
          <input type='email' placeholder='Email Address...' />
          <button>
            <i className='fa fa-paper-plane'></i> SUBMIT
          </button>
        </form>
      </section>

      <section className='banner'>
        <img src='./images/sidebar-banner-new.jpg' alt='' />
      </section>

      <section className='catgorys'>
        <Heading title='Catgeorys' />
        {catgeory.map((val, index) => {
          return (
            <div key={index} className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>

      <section className='gallery'>
        <Heading title='Gallery' />
        <Slider {...settings}>
          {gallery.map((val, index) => {
            return (
              <div key={index} className='img'>
                <img src={val.cover} alt='' />
              </div>
            )
          })}
        </Slider>
      </section>
    </>
  )
}

export default Side