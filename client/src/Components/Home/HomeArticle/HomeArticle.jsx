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
          <a href='/TechnologyWeb' alt='nothing'>Technology</a>
          <a href='/TechnologyWeb' alt='nothing'>Open Source</a>
          <a href='/TechnologyWeb' alt='nothing'>JavaScript</a>
          <a href='/TechnologyWeb' alt='nothing'>Minimalism</a>
          <a href='/TechnologyWeb' alt='nothing'>Self-help</a>
          <a href='/TechnologyWeb' alt='nothing'>Animals</a>
          <a href='/TechnologyWeb' alt='nothing'>Herbivores</a>
          <a href='/TechnologyWeb' alt='nothing'>HTML</a>
          <a href='/TechnologyWeb' alt='nothing'>CSS</a>
          <a href='/TechnologyWeb' alt='nothing'>PHP</a>
          <a href='/TechnologyWeb' alt='nothing'>Web Technologies</a>
          <a href='/TechnologyWeb' alt='nothing'>Career</a>
          <a href='/TechnologyWeb' alt='nothing'>Life</a>
          <a href='/TechnologyWeb' alt='nothing'>Spirituality</a>
          <a href='/TechnologyWeb' alt='nothing'>Food</a>
          <a href='/TechnologyWeb' alt='nothing'>Cooking</a>
          <a href='/TechnologyWeb' alt='nothing'>Sports</a>
          <a href='/TechnologyWeb' alt='nothing'>Racing</a>
          <a href='/TechnologyWeb' alt='nothing'>Mountain Hiking</a>
          <a href='/TechnologyWeb' alt='nothing'>Cruising</a>
      </div>
    </div>
  )
}

export default HomeArticle
