import React from 'react'
import { HomeArticle, HomeContent, HomeHeader } from '../../components'

const Home = () => {
  return (
    <div className="blog__header">
      <HomeHeader/>
      <HomeContent/>
      <HomeArticle/>
    </div>
  )
}

export default Home
