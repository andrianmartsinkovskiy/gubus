import React, {useState} from 'react'
import './style.scss'
import {SectionIcon} from "../../../components/ui/section-icon";

const HomeEventFirst = ({item, index}) => {
  const [activeLabel, setActiveLabel] = useState(item.items[0])


  return (
    <div className='home-event_wrap'>
      <div className='home-event_container block'>
        <div className='home-event_icon-second'>/06</div>
        <SectionIcon>
          <span className='home-event_icon'>0{index+1}</span>
        </SectionIcon>
        <div className='home-event_line line'></div>
        <h2 className="home-event_title title">
          {item.titleWhite} <span className='blue'> {item.titleBlue}</span>
        </h2>
        <p className="home-event_subtitle">
          {item.subtitle}
        </p>

        <div className="home-event_table">
          <div className="home-event_content">
            <p className="home-event_content_label">Features</p>

            <div className="home-event_list">
              {
                item.items.map(label => (
                  <div
                    key={Math.random()}
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
                ))
              }
            </div>

            <div className="home-event_note">
              {item.note}
            </div>
          </div>
          <div className="home-event_poster">
            <img src={activeLabel.poster} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  HomeEventFirst
}