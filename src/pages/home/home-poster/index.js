import React from 'react'
import './style.scss'
import posterImg from '../../../assets/images/poster.svg'
import lineImg from '../../../assets/images/poster-bottom-line.svg'
import {Animated} from "react-animated-css";

const HomePoster = () => {

  return (
    <>
      <Animated animationIn="slideInDown fadeIn" animationOut="fadeOut" animationInDelay={0} isVisible={true}>
        <div  className='home-poster'>
          <img src={posterImg} alt=""/>
        </div>
      </Animated>

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