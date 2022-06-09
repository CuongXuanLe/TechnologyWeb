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
    </div>
  )
}

export default HomeArticle
