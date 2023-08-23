import React, {useRef} from "react";
import './style.scss'
import {ButtonWithArrow} from "../../../components/ui/buttons/button-with-arrow";
import iconImg from '../../../assets/images/ranking.svg'
import howImg from '../../../assets/images/how-image.svg'
import {SectionIcon} from "../../../components/ui/section-icon";
import useOnScreen from "../../../hooks/on-screen.hook";
import {Animated} from "react-animated-css";


const HomeHow = () => {
  const ref = useRef()
  const isInView = useOnScreen(ref)

  return (
    <div ref={ref} className='home-how mobile-text-center block'>
      <div className='home-how_dec'>
        <div className="home-how_dec_left">
          <div></div>
        </div>
        <div className="home-how_dec_right">
          <div></div>
        </div>
        <Animated animationIn="zoomIn" animationOut="fadeOut" animationInDelay={0} isVisible={isInView}>
          <img src={howImg} alt=""/>
        </Animated>
      </div>
      <SectionIcon>
        <img src={iconImg} alt=""/>
      </SectionIcon>

      <div className='home-how_line line'>

      </div>

      <p className="home-how_label">HOW?</p>

      <Animated animationIn="lightSpeedIn" animationOut="fadeOut" animationInDelay={800} isVisible={isInView}>
        <h2 className="home-how_title title">
          USE <span className="blue"> GUBUS</span> DEEP CUSTOM WORKFLOW ENGINE
        </h2>
      </Animated>

      <Animated animationIn="lightSpeedIn" animationOut="fadeOut" animationInDelay={1000} isVisible={isInView}>
        <p className="home-how_subtitle">
          TO MAP EACH UNIQUE ASPECT OF YOUR BUSINESS TO GATHER ALL THE PROCESSES IN ONE PLACE
        </p>
      </Animated>

      <Animated animationIn="lightSpeedIn" animationOut="fadeOut" animationInDelay={1200} isVisible={isInView}>
        <ButtonWithArrow text="get started" />
      </Animated>
    </div>
  )
}

export {
  HomeHow
}