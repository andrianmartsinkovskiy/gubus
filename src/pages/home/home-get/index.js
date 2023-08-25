import React, {useRef} from 'react'
import './style.scss'
import {ButtonWithArrow} from "../../../components/ui/buttons/button-with-arrow";
import star from '../../../assets/images/ranking-blue.svg'
import useOnScreen from "../../../hooks/on-screen.hook";


const HomeGet = () => {
  const ref = useRef()
  const isInView = useOnScreen(ref)

  return (
    <div className="home-get_section" >
      <div className="home-get_wrap">
        <div className="home-get_container block">
          <div ref={ref} style={{opacity: isInView ? 1 : 0}} className="home-get_icon">
            <img src={star} alt=""/>
          </div>
          <h2 className="home-get_title title" style={{opacity: isInView ? 1 : 0}}>
            Get a custom GUBUS pricing estimate based on your
            <span className="opacity"> preliminary inputs on this page</span>
          </h2>
          <div className="home-get_btn" style={{opacity: isInView ? 1 : 0}}>
            <ButtonWithArrow isWhite={true} text="Get it" />
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  HomeGet
}