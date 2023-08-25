import React from 'react'
import './style.scss'
import posterImg from '../../../assets/images/poster.svg'
import lineImg from '../../../assets/images/poster-bottom-line.svg'

const HomePoster = () => {

  return (
    <>
      <div  className='home-poster'>
        <img src={posterImg} alt=""/>
      </div>

      <div className="home-bottom-line line">
        <div className='home-bottom-line_img-wrap'>
          <img src={lineImg} alt=""/>
        </div>
      </div>
    </>
  )
}

export {
  HomePoster
}