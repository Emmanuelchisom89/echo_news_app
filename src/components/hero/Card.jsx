import React from "react";

const Card = ({ url, src, category, title, creator, date }) => {
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={src} alt={title} />
        </div>
        <div className='text'>
          <span className='category'>{category}</span>
          <a href={url}>
            <h1 className='titleBg'>{title ? title.slice(0, 45) + ' ...' : "My Title"}</h1>
          </a>  
          <div className='author flex'>
            <span>by {creator}</span>
            <span>{new Date(date).toDateString()}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
