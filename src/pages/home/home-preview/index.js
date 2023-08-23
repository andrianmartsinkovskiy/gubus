import React from 'react'
import './style.scss'
import {ButtonWithArrow} from "../../../components/ui/buttons/button-with-arrow";
import light from '../../../assets/images/preview-light.svg'
import {Animated} from "react-animated-css";

const HomePreview = () => {

  return (
    <>
      <div className="home-preview">
        <div className="home-preview_container block">
          <div className="home-preview_dec">
            <img src={light} alt=""/>
          </div>
          <div className='home-preview_content'>
            <Animated animationIn="fadeInUp" animationOut="fadeOut"  isVisible={true}>
              <div className='home-preview_content_title title'>
                <span className='blue'>GUBUS</span> is the rule-breaking innovator transforming the CRM-ERP market.
              </div>
            </Animated>

            <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay={300} isVisible={true}>
              <div className='home-preview_content_subtitle'>
                Create a mirrored reflection of EVERY ASPECT of
                your unique business with the ingenious, highly customizable framework of GUBUS!
              </div>
            </Animated>

            <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay={600} isVisible={true}>
              <div className="home-preview_content_action">
                <ButtonWithArrow text='get started' />
              </div>
            </Animated>


          </div>
        </div>
      </div>
    </>
  )
}

export {
  HomePreview
}