import React from 'react'
import './style.scss'
import {ButtonWithArrow} from "../../../components/ui/buttons/button-with-arrow";
import star from '../../../assets/images/ranking-blue.svg'


const HomeGet = () => {


  return (
    <div className="home-get_wrap">
      <div className="home-get_container block">
        <div className="home-get_icon">
          <img src={star} alt=""/>
        </div>
        <h2 className="home-get_title title">
          Get a custom GUBUS pricing estimate based on your
          <span className="opacity"> preliminary inputs on this page</span>
        </h2>
        <div className="home-get_btn">
          <ButtonWithArrow isWhite={true} text="Get it" />
        </div>
      </div>
    </div>
  )
}

export {
  HomeGet
}