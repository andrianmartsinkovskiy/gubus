import React from "react";
import './style.scss'
import {ButtonWithArrow} from "../../../components/ui/buttons/button-with-arrow";
import iconImg from '../../../assets/images/ranking.svg'
import howImg from '../../../assets/images/how-image.svg'
import {SectionIcon} from "../../../components/ui/section-icon";


const HomeHow = () => {

  return (
    <div className='home-how block'>
      <div className='home-how_dec'>
        <img src={howImg} alt=""/>
      </div>
      <SectionIcon>
        <img src={iconImg} alt=""/>
      </SectionIcon>

      <div className='home-how_line line'>

      </div>

      <p className="home-how_label">HOW?</p>
      <h2 className="home-how_title title">
        USE <span className="blue"> GUBUS</span> DEEP CUSTOM WORKFLOW ENGINE
      </h2>
      <p className="home-how_subtitle">
        TO MAP EACH UNIQUE ASPECT OF YOUR BUSINESS TO GATHER ALL THE PROCESSES IN ONE PLACE
      </p>
      <ButtonWithArrow text="get started" />
    </div>
  )
}

export {
  HomeHow
}