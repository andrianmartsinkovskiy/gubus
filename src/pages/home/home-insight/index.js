import React, {useRef} from "react";
import './style.scss'
import posterImg from '../../../assets/images/poster-insight.svg'
import {ButtonWithArrow} from "../../../components/ui/buttons/button-with-arrow";
import starImg from "../../../assets/images/star.svg";
import {SectionIcon} from "../../../components/ui/section-icon";
import useOnScreen from "../../../hooks/on-screen.hook";
import {Animated} from "react-animated-css";


const HomeInsight = () => {
  const ref = useRef()
  const isInView = useOnScreen(ref)


  return (
    <div ref={ref} className='home-insight_wrap'>
      <Animated animationIn="fadeInRight" animationOut="fadeOut" animationInDelay={0} isVisible={isInView}>
        <div className="home-insight_poster">
          <img className="home-insight_poster_img" src={posterImg} alt=""/>
        </div>
      </Animated>
      <div className="home-insight">
        <div className="home-insight_line line">

        </div>
        <SectionIcon>
          <img src={starImg} alt=""/>
        </SectionIcon>
        <div className='home-insight_content mobile-text-center block'>
          <p className='home-insight_content_label'>INSIGHT</p>
          <Animated  animationOutDuration={1000} animationIn="fadeInUp" animationOut="fadeOut" animationInDelay={200}  isVisible={isInView}>
            <h2 className='home-insight_content_title title'>
              <span className='blue'>GUBUS </span> IS A POWERFUL, LIGHTWEIGHT, ULTRA
              <br />CUSTOMIZABLE<br /> FRAMEWORK TO REACH THIS TARGET
            </h2>
          </Animated>
          <Animated  animationOutDuration={1000} animationIn="fadeInUp" animationOut="fadeOut" animationInDelay={400} isVisible={isInView}>
            <p className="home-insight_content_subtitle">
              To quickly create and perfect fit crm-erp of your certain needs and processes.
            </p>
          </Animated>
          <Animated  animationOutDuration={1000} animationIn="fadeInUp" animationOut="fadeOut" animationInDelay={600} isVisible={isInView}>
            <ButtonWithArrow text="get started" />
          </Animated>
        </div>
        <div>
        </div>
      </div>

    </div>
  )
}

export {
  HomeInsight
}