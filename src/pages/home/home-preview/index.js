import React from 'react'
import './style.scss'
import {ButtonWithArrow} from "../../../components/ui/buttons/button-with-arrow";
import light from '../../../assets/images/preview-light.svg'

const HomePreview = () => {

  return (
    <>
      <div className="home-preview">
        <div className="home-preview_container block">
          <div className="home-preview_dec">
            <img src={light} alt=""/>
          </div>
          <div className='home-preview_content'>
            <div className='home-preview_content_title title'>
              <span className='blue'>GUBUS</span> is the rule-breaking innovator transforming the CRM-ERP market.
            </div>
            <div className='home-preview_content_subtitle'>
              Create a mirrored reflection of EVERY ASPECT of
              your unique business with the ingenious, highly customizable framework of GUBUS!
            </div>

            <div className="home-preview_content_action">
              <ButtonWithArrow text='get started' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {
  HomePreview
}