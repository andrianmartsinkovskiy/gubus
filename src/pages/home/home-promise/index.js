import React from 'react'
import './style.scss'
import starImg from "../../../assets/images/medal-star.svg";
import bgLight from '../../../assets/images/promise-bg.svg'
import {SectionIcon} from "../../../components/ui/section-icon";

const HomePromise = () => {

  return (
    <div className='home-promise_wrap'>
      <div className='home-promise'>
        <div className="home-promise_line line"></div>

        <img className="home-promise-bg" src={bgLight} alt=""/>

        <SectionIcon >
          <img src={starImg} alt=""/>
        </SectionIcon>

        <div className="home-promise_content block">
          <p className="home-promise_content_label">GUBUS PROMISE</p>
          <h2 className="home-promise_content_title title">
            Few dozens hours for <span className='blue'>GUBUS</span> expert… and your business is totally digitized!
          </h2>
          <p className="home-promise_content_subtitle">
            Orders, clients, sales, storage, salaries, costs, deeply integrated telegram bot, mobile ready system, manager interfaces, databases - EVERYTHING!
          </p>
        </div>
      </div>
    </div>
  )
}

export {
  HomePromise
}