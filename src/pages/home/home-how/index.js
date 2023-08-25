import React, {useRef} from "react";
import './style.scss'
import {ButtonWithArrow} from "../../../components/ui/buttons/button-with-arrow";
import iconImg from '../../../assets/images/ranking.svg'
import howImg from '../../../assets/images/how-image.svg'
import {SectionIcon} from "../../../components/ui/section-icon";
import useOnScreen from "../../../hooks/on-screen.hook";
import {AnimScale} from "../../../components/anim-scale";
import {AnimLeft} from "../../../components/anim-left";


const HomeHow = () => {
  const ref = useRef()
  const isInView = useOnScreen(ref)

  const decRef = useRef()
  const isDecInView = useOnScreen(decRef)

  return (
    <div className='home-how mobile-text-center block'>

      <div className='home-how_dec'>
        <div className="home-how_dec_left">
          <div></div>
        </div>
        <div className="home-how_dec_right">
          <div></div>
        </div>
        <AnimScale isInView={isDecInView}>
          <img ref={decRef} src={howImg} alt=""/>
        </AnimScale>
      </div>
      <SectionIcon isInView={isInView}>
          <img src={iconImg} alt=""/>
      </SectionIcon>

      <div className='home-how_line line' style={{maxHeight: isInView ? '2000px' : 0}}>

      </div>

      <p className="home-how_label" ref={ref}>HOW?</p>

      <h2 className="home-how_title title">
        USE <span className="blue"> GUBUS</span> DEEP CUSTOM WORKFLOW ENGINE
      </h2>

      <p className="home-how_subtitle">
        TO MAP EACH UNIQUE ASPECT OF YOUR BUSINESS TO GATHER ALL THE PROCESSES IN ONE PLACE
      </p>

        <AnimLeft isInView={isInView} left={100} delay={500}>
          <ButtonWithArrow text="get started" />
        </AnimLeft>
    </div>
  )
}

export {
  HomeHow
}