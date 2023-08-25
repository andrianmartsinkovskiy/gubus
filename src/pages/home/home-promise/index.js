import React, {useRef} from 'react'
import './style.scss'
import starImg from "../../../assets/images/medal-star.svg";
import bgLight from '../../../assets/images/promise-bg.svg'
import {SectionIcon} from "../../../components/ui/section-icon";
import useOnScreen from "../../../hooks/on-screen.hook";
import {Animated} from "react-animated-css";

const HomePromise = () => {
  const ref = useRef()
  const isInView = useOnScreen(ref)

  return (
    <div className="home-promise_section" >
      <div className='home-promise_wrap'>
        <div className='home-promise'>
          <div className="home-promise_line line" style={{maxHeight: isInView ? '2000px' : 0}}></div>

          <img className="home-promise-bg" src={bgLight} alt=""/>

          <SectionIcon isInView={isInView}>
            <img src={starImg} alt=""/>
          </SectionIcon>

          <div ref={ref} className="home-promise_content mobile-text-center block">
            <p className="home-promise_content_label">GUBUS PROMISE</p>
            <Animated animationIn="lightSpeedIn" animationOut="fadeOut" animationInDelay={0} isVisible={isInView}>
              <h2 className="home-promise_content_title title">
                Few dozens hours for <span className='blue'>GUBUS</span> expert… and your business is totally digitized!
              </h2>
            </Animated>
            <Animated animationIn="lightSpeedIn" animationOut="fadeOut" animationInDelay={300} isVisible={isInView}>
              <p className="home-promise_content_subtitle">
                Orders, clients, sales, storage, salaries, costs, deeply integrated telegram bot, mobile ready system, manager interfaces, databases - EVERYTHING!
              </p>
            </Animated>
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  HomePromise
}