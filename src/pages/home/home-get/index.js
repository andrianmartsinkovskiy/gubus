import React, {useRef} from 'react'
import './style.scss'
import {ButtonWithArrow} from "../../../components/ui/buttons/button-with-arrow";
import star from '../../../assets/images/ranking-blue.svg'
import useOnScreen from "../../../hooks/on-screen.hook";
import {Animated} from "react-animated-css";


const HomeGet = () => {
  const ref = useRef()
  const isInView = useOnScreen(ref)

  return (
    <div ref={ref} className="home-get_section" >
      <div className="home-get_wrap">
        <div className="home-get_container block">
          <div className="home-get_icon">
            <img src={star} alt=""/>
          </div>
          <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay={300} isVisible={isInView}>
            <h2 className="home-get_title title">
              Get a custom GUBUS pricing estimate based on your
              <span className="opacity"> preliminary inputs on this page</span>
            </h2>
          </Animated>
          <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay={700} isVisible={isInView}>
            <div className="home-get_btn">
              <ButtonWithArrow isWhite={true} text="Get it" />
            </div>
          </Animated>
        </div>
      </div>
    </div>
  )
}

export {
  HomeGet
}