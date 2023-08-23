import React, {useState} from 'react'
import './style.scss'
import {SectionIcon} from "../../../components/ui/section-icon";

const HomeEventSecond = ({isLast, item, index}) => {
  const [activeLabel, setActiveLabel] = useState(item.items[0])

  return (
    <div className='home-event-second_wrap'>
      <div className='home-event-second_container block'>
        <div className='home-event-second_icon-second'>/06</div>
        <SectionIcon>
          <span className="home-event-second_icon">0{index+1}</span>
        </SectionIcon>
        <div className={`home-event-second_line line ${isLast && 'home-event-second_line-last'}`}></div>
        <h2 className="home-event-second_title title">
          <span className='blue'>{item.titleWhite} </span> {item.titleBlue}
        </h2>
        <p className="home-event-second_subtitle">
          {item.subtitle}
        </p>

        <div className="home-event-second_table">
          <div className="home-event-second_poster">
            <img src={activeLabel.poster} alt=""/>
          </div>

          <div className="home-event-second_content">
            <p className="home-event-second_content_label">Features</p>

            <div className="home-event-second_list">
              {
                item.items.map(label => (
                  <div
                    key={label.id}
                    className={`home-event-second_list_item ${label.id === activeLabel.id && 'home-event-second_list_item-active'}`}
                    onClick={() => setActiveLabel(label)}>
                    <div className="home-event-second_list_item-icon">
                      <img src={label.icon} alt=""/>
                    </div>
                    <div>
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