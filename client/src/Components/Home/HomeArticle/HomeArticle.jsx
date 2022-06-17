import React from 'react';
import './HomeArticle.css';
import data from '../../../constants/data';
import Article from './Article/Article';


const HomeArticle = () => {
  return (
    <div className='blog__article'>
        <div  className="article__list">
            {data.article.map((article) =>(
              <Article 
              link={article.link}
              image={article.image} 
              tittle={article.tittle} 
              header={article.header} 
              userName={article.userName} 
              date={article.date}
              content={article.content}/>
            ))}
        </div>
      <div className="article__tags">
          <p className="article__tag-header">
              tags.
          </p>
          <a href='#' alt='nothing'>Technology</a>
          <a href='#' alt='nothing'>Open Source</a>
          <a href='#' alt='nothing'>JavaScript</a>
          <a href='#' alt='nothing'>Minimalism</a>
          <a href='#' alt='nothing'>Self-help</a>
          <a href='#' alt='nothing'>Animals</a>
          <a href='#' alt='nothing'>Herbivores</a>
          <a href='#' alt='nothing'>HTML</a>
          <a href='#' alt='nothing'>CSS</a>
          <a href='#' alt='nothing'>PHP</a>
          <a href='#' alt='nothing'>Web Technologies</a>
          <a href='#' alt='nothing'>Career</a>
          <a href='#' alt='nothing'>Life</a>
          <a href='#' alt='nothing'>Spirituality</a>
          <a href='#' alt='nothing'>Food</a>
          <a href='#' alt='nothing'>Cooking</a>
          <a href='#' alt='nothing'>Sports</a>
          <a href='#' alt='nothing'>Racing</a>
          <a href='#' alt='nothing'>Mountain Hiking</a>
          <a href='#' alt='nothing'>Cruising</a>
      </div>
    </div>
  )
}

export default HomeArticle
