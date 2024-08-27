import React from 'react'

const NaijaNewsItem = ({ title, description, src, url, date, icon, iconName }) => {
  
  const altDescription = 'News is a report of a current event. It is information about something that just happened.'

  const basePath = process.env.NODE_ENV === 'production' ? '/echo_news_app/' : '';


  const altImg = `${basePath}src/assets/naija.jpg`


  return (
    <a href={url} className='article'>
      <div className='article-image'>
        <img src={src ? src : altImg} alt='img' />
      </div>
      <div className="article-content">
        <div className="article-source">
          <img src={icon} alt="icon" />
          <span>{iconName}</span>
        </div>
        <div className="article-title">
          <h3>{title}</h3>
        </div>
        <p className="article-description">
          {description ? description.slice(0,100) + "..." : altDescription}
        </p>
        <div className="article-details">
          <small><b>Published At: </b>{date}</small>
        </div>
      </div>
    </a>
  )
}

export default NaijaNewsItem
