import React from 'react'
import "./advertBottom.scss"

const AdvertBottom = () => {

        const basePath = process.env.NODE_ENV === 'production' ? '/echo_news_app/' : '';


  return (
      <div className='advertBottom'>
            <div className="offscreenn">
                <a href="">
                    <img src={`${basePath}src/assets/advertttt.gif`} alt="" />
                </a>
          </div>      
      </div>
  )
}

export default AdvertBottom
