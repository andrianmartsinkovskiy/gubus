import React, {useRef, useState} from 'react'
import './style.scss'
import {SectionIcon} from "../../../components/ui/section-icon";
import useOnScreen from "../../../hooks/on-screen.hook";
import {Animated} from "react-animated-css";

const HomeEventFirst = ({item, index}) => {
  const [activeLabel, setActiveLabel] = useState(item.items[0])
  const ref = useRef()
  const isInView = useOnScreen(ref)

  return (
    <div ref={ref} className='home-event_wrap'>
      <div className='home-event_container block'>
        <div className='home-event_icon-second'>/06</div>
        <SectionIcon>
          <span className='home-event_icon'>0{index+1}</span>
        </SectionIcon>
        <div className='home-event_line line'></div>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={0} isVisible={isInView}>
          <h2 className="home-event_title title mobile-text-center">
            {item.titleWhite} <span className='blue'> {item.titleBlue}</span>
          </h2>
        </Animated>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={300} isVisible={isInView}>
          <p className="home-event_subtitle mobile-text-center">
            {item.subtitle}
          </p>
        </Animated>

        <div className="home-event_table">
          <div className="home-event_content">
            <p className="home-event_content_label">Features</p>

            <div className="home-event_list">
              {
                item.items.map((label, index) => (
                  <Animated key={Math.random()} animationIn="fadeInLeft" animationOut="fadeOut" animationInDelay={index * 300} isVisible={isInView}>
                    <div
                      className={`home-event_list_item ${label.id === activeLabel.id && 'home-event_list_item-active'}`}
                      onClick={() => setActiveLabel(label)}
                    >
                      <div className="home-event_list_item-icon">
                        <img src={label.icon} alt=""/>
                      </div>
                      <div>
                        {label.text}
                      </div>
                    </div>
                  </Animated>
                ))
              }
            </div>

            <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDelay={1200} isVisible={isInView}>
              <div className="home-event_note">
                {item.note}
              </div>
            </Animated>
          </div>

          <Animated animationIn="fadeInRight" animationOut="fadeOut" animationInDelay={300} isVisible={isInView}>
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