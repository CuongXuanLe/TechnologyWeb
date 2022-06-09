import React from 'react'
import './HomeContent.css'

const HomeContent = () => {
  return (
    <div className='blog__content'>
      <div className="blog__content-box">
        <div className="content__box-heading">
          <p className='heading__1'>
            INTERIOR
          </p>
          <h1 className='heading__2'>
            About Me!
          </h1>
        </div>
        <div className="content__box-info">
          <p>
            Bessie Hawkins
          </p>
          <p className='dot'>.</p>
          <p>May 7, 2019 (10 mins read)</p>
        </div>
        <div className="content__box-text">
          <p>
          Proident aliquip velit qui commodo 
          officia qui consectetur dolor ullamco 
          aliquip elit incididunt. Ea minim ex 
          consectetur excepteur. Ex laborum nostrud 
          mollit sint consectetur Lorem amet aliqua 
          do enim. Commodo duis dolor anim excepteur. 
          In aliquip mollit nulla consequat velit magna.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeContent

