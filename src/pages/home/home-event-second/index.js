import React, {useRef, useState} from 'react'
import './style.scss'
import {SectionIcon} from "../../../components/ui/section-icon";
import useOnScreen from "../../../hooks/on-screen.hook";
import {AnimLeft} from "../../../components/anim-left";

const HomeEventSecond = ({isLast, item, index}) => {
  const [activeLabel, setActiveLabel] = useState(item.items[0])
  const ref = useRef()
  const isInView = useOnScreen(ref)


  return (
    <div className='home-event-second_wrap'>
      <div className='home-event-second_container block'>
        <div className='home-event-second_icon-second' style={{opacity: isInView ? 1 : 0}}>/06</div>
        <SectionIcon isInView={isInView}>
          <span className="home-event-second_icon">0{index + 1}</span>
        </SectionIcon>
        <div className={`home-event-second_line line ${isLast && 'home-event-second_line-last'}`} style={{maxHeight: isInView ? '2000px' : 0}}></div>
        <AnimLeft isInView={isInView}>
          <h2 ref={ref} className="home-event-second_title title mobile-text-center">
            <span className='blue'>{item.titleWhite} </span> {item.titleBlue}
          </h2>
        </AnimLeft>
        <AnimLeft isInView={isInView} delay={300}>
          <p className="home-event-second_subtitle mobile-text-center">
            {item.subtitle}
          </p>
        </AnimLeft>

        <div className="home-event-second_table">
          <div className="home-event-second_poster">
          </div>

          <div className="home-event-second_content">
            <p className="home-event-second_content_label">Features</p>

            <div className="home-event-second_list">
              {
                item.items.map((label, i) => (
                  <div
                    key={Math.random()}
                    className={`home-event-second_list_item ${label.id === activeLabel.id && 'home-event-second_list_item-active'}`}
                    onClick={() => setActiveLabel(label)}>
                    <div className="home-event-second_list_item-icon">
                      {label.icon}
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

            <div className="home-event-second_note">
              {item.note}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  HomeEventSecond
}