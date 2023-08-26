import React, {useRef, useState} from 'react'
import './style.scss'
import {SectionIcon} from "../../../components/ui/section-icon";
import useOnScreen from "../../../hooks/on-screen.hook";
import {Animated} from "react-animated-css";
import {AnimLeft} from "../../../components/anim-left";

const HomeEventFirst = ({item, index}) => {
  const [activeLabel, setActiveLabel] = useState(item.items[0])
  const ref = useRef()
  const isInView = useOnScreen(ref)


  return (
    <div className='home-event_wrap'>
      <div className='home-event_container block'>
        <div className='home-event_icon-second' style={{opacity: isInView ? 1 : 0}}>/06</div>
        <SectionIcon isInView={isInView}>
          <span className='home-event_icon'>0{index + 1}</span>
        </SectionIcon>
        <div className='home-event_line line' style={{maxHeight: isInView ? '2000px' : 0}}></div>
        <AnimLeft isInView={isInView}>
          <h2 ref={ref} className="home-event_title title mobile-text-center">
            {item.titleWhite} <span className='blue'> {item.titleBlue}</span>
          </h2>
        </AnimLeft>
        <AnimLeft isInView={isInView} delay={300}>
          <p className="home-event_subtitle mobile-text-center">
            {item.subtitle}
          </p>
        </AnimLeft>



        <div className="home-event_table">
          <div className="home-event_content">
            <p className="home-event_content_label">Features</p>

            <div className="home-event_list">
              {
                item.items.map((label) => (
                  <div
                    className={`home-event_list_item ${label.id === activeLabel.id && 'home-event_list_item-active'}`}
                    onClick={() => setActiveLabel(label)}
                    key={Math.random()}
                  >
                    <div className="home-event_list_item-icon">
                      {label.icon}
                    </div>
                    <div>
                      {label.text}
                    </div>
                  </div>
                ))
              }
            </div>


            <div className="home-event_note">
              {item.note}
            </div>
          </div>

          <Animated className="home-event_poster-wrap" animationIn="fadeInRight" animationOut="fadeOut"
                    animationInDelay={300} isVisible={isInView}>
            <div className="home-event_poster">
              <img src={activeLabel.poster} alt=""/>
            </div>
          </Animated>
        </div>
      </div>
    </div>
  )
}

export {
  HomeEventFirst
}