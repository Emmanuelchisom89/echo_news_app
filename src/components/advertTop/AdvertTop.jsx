import React from 'react'
import "./advertTop.scss"

const AdvertTop = () => {

    const basePath = process.env.NODE_ENV === 'production' ? '/echo_news_app/' : '';

  return (
      <div className='advertTop'>
          <div className="advertTopContainer">
              <div className="left">
                  <a href="">
                      <img src={`${basePath}images/Echonews.jpg`} alt="USNews Logo" width={227} height={100} />
                  </a>
              </div>
              <div className="right ro">
                  <a href="">
                    <img src={`${basePath}images/advertttt.gif`} alt="" />
                  </a>
              </div>
          </div>
      
    </div>
  )
}

export default AdvertTop
