import React from 'react'
import './style.scss'
import icon from '../../../assets/images/screen-icon.svg'
import poster from '../../../assets/images/event-poster.svg'

const HomeEventFirst = () => {

  return (
    <div className='home-event_wrap'>
      <div className='home-event_container'>
        <div className='home-event_icon-second'>/06</div>
        <div className='home-event_icon'>01</div>
        <div className='home-event_line'></div>
        <h2 className="home-event_title">
          STRAIGHTENED EVEN THE <span className='blue'> CRAZIEST STAGE</span>
        </h2>
        <p className="home-event_subtitle">
          Easily build custom workflows for each of your products.
        </p>

        <div className="home-event_table">
          <div className="home-event_content">
            <p className="home-event_content_label">Features</p>

            <div className="home-event_list">
              {
                [1,2,3].map(item => (
                  <div className="home-event_list_item">
                    <div className="home-event_list_item-icon">
                      <img src={icon} alt=""/>
                    </div>
                    <div>
                      Adaptive event driven built-in stages resolution logic in a box
                    </div>
                  </div>
                ))
              }
            </div>

            <div className="home-event_note">
              // Time estimate to totally GUBUS them: 10 hours
            </div>
          </div>
          <div className="home-event_poster">
            <img src={poster} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  HomeEventFirst
}