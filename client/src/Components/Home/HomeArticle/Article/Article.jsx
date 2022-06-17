import React from 'react'
import './Article.css'

const Article = ({
    link,
    image,
    tittle,
    header,
    userName,
    date,
    content}) => {
  return (
    <div className='Article__items'>
      <div className="article__img">
          <img src={image} alt="Article"/>
      </div>
      <div className="article__body">
          <div className="article__tittle">
              <p>{tittle}</p>
          </div>
          <div className="article__header">
              <h1>{header}</h1>
          </div>
          <div className="article__info">
              <p>{userName}</p>
              <p className='dot'>.</p>
              <p>{date}</p>
          </div>
          <div className="article__content">
              <p>{content}</p>
          </div>
      </div>
    </div>
  )
}

export default Article
