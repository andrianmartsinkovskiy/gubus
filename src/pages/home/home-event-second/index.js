import React, {useRef, useState} from 'react'
import './style.scss'
import {SectionIcon} from "../../../components/ui/section-icon";
import {Animated} from "react-animated-css";
import useOnScreen from "../../../hooks/on-screen.hook";

const HomeEventSecond = ({isLast, item, index}) => {
  const [activeLabel, setActiveLabel] = useState(item.items[0])
  const ref = useRef()
  const isInView = useOnScreen(ref)

  return (
    <div ref={ref} className='home-event-second_wrap'>
      <div className='home-event-second_container block'>
        <div className='home-event-second_icon-second'>/06</div>
        <SectionIcon>
          <span className="home-event-second_icon">0{index+1}</span>
        </SectionIcon>
        <div className={`home-event-second_line line ${isLast && 'home-event-second_line-last'}`}></div>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={100} isVisible={isInView}>
          <h2 className="home-event-second_title title mobile-text-center">
            <span className='blue'>{item.titleWhite} </span> {item.titleBlue}
          </h2>
        </Animated>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={400} isVisible={isInView}>
          <p className="home-event-second_subtitle mobile-text-center">
            {item.subtitle}
          </p>
        </Animated>

        <div className="home-event-second_table">
          <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDelay={300} isVisible={isInView}>
            <div className="home-event-second_poster">
              <img src={activeLabel.poster} alt=""/>
            </div>
          </Animated>



          <div className="home-event-second_content">
            <p className="home-event-second_content_label">Features</p>

            <Animated animationIn="fadeInRight" animationOut="fadeOut" animationInDelay={300} isVisible={isInView}>
              <div className="home-event-second_list">
                  {
                    item.items.map((label, i) => (
                        <div
                          key={Math.random()}
                          className={`home-event-second_list_item ${label.id === activeLabel.id && 'home-event-second_list_item-active'}`}
                          onClick={() => setActiveLabel(label)}>
                          <div className="home-event-second_list_item-icon">
                            <img src={label.icon} alt=""/>
                          </div>
                          <div className="home-event-second_list_item-text">
                            {
                              label.text
                            }
                          </div>
                        </div>
                    ))
                  }
              </div>
            </Animated>

            <Animated animationIn="fadeInRight" animationOut="fadeOut" animationInDelay={600} isVisible={isInView}>
              <div className="home-event-second_note">
                {item.note}
              </div>
            </Animated>
          </div>

        </div>
      </div>
    </div>
  )
}

export {
  HomeEventSecond
}