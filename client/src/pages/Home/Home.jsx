import {useEffect, useState} from 'react'
import { HomeArticle, HomeContent, HomeHeader } from '../../components'
import axios from 'axios'

export default function Home(){
  // const [posts, setPosts] = useState([]);
  
  // useEffect(()=>{
  //   const fetchPosts = async () => {
  //     const res = await axios.get("/posts")
  //     setPosts(res.data)
  //   }
  //   fetchPosts()
  // },[])
  
  return (
    <div className="blog__header">
      <HomeHeader/>
      <HomeContent/>
      <HomeArticle/>
    </div>
  )
}


