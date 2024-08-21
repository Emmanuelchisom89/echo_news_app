import React from 'react'

const altDescription = 'News is a report of a current event. It is information about something that just happened.'

const altImage = "src/assets/news.jpg"

const WorldNewsItem = ({title, description, src, url, date, icon, iconName}) => {
  return (
<div className="card bg-dark text-light mb-3  my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
  <img src={src ? src : altImage} style={{height: "200px"}} className="card-img-top" alt="..." />
    <div className="card-body">
      <div className="my-3 article-source">
        <img src={icon} alt="icon" style={{height: "20px", width: "20px"}} />
        <span style={{fontSize: "14px"}}> {iconName}</span>
      </div>
    <h3 className="card-title">{title.length>51 ? title.slice(0,50) + '...' : title}</h3>
    <p className="card-text">{description && description.length>91? description.slice(0,90) + "...": altDescription}</p>
    <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
  </div>
    </div>
  )
}

export default WorldNewsItem
  