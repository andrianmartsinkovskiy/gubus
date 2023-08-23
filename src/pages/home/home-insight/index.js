import React from "react";
import './style.scss'
import posterImg from '../../../assets/images/poster-insight.svg'
import {ButtonWithArrow} from "../../../components/ui/buttons/button-with-arrow";
import starImg from "../../../assets/images/star.svg";
import {SectionIcon} from "../../../components/ui/section-icon";


const HomeInsight = () => {

  return (
    <div className='home-insight_wrap'>
      <div className="home-insight_poster">
        <img className="home-insight_poster_img" src={posterImg} alt=""/>
      </div>
      <div className="home-insight">
        <div className="home-insight_line line">

        </div>
        <SectionIcon>
          <img src={starImg} alt=""/>
        </SectionIcon>
        <div className='home-insight_content mobile-text-center block'>
          <p className='home-insight_content_label'>INSIGHT</p>
          <h2 className='home-insight_content_title title'>
            <span className='blue'>GUBUS </span> IS A POWERFUL, LIGHTWEIGHT, ULTRA
            <br />CUSTOMIZABLE<br /> FRAMEWORK TO REACH THIS TARGET
          </h2>
          <p className="home-insight_content_subtitle">
            To quickly create and perfect fit crm-erp of your certain needs and processes.
          </p>
          <ButtonWithArrow text="get started" />
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