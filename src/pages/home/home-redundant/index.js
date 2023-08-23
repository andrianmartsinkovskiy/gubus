import React, {useRef} from 'react'
import'./index.scss'
import iconImg from "../../../assets/images/tick-circle.svg";
import {SectionIcon} from "../../../components/ui/section-icon";
import useOnScreen from "../../../hooks/on-screen.hook";
import {Animated} from "react-animated-css";

const HomeRedundant = () => {
  const ref = useRef()
  const isInView = useOnScreen(ref)

  return (
    <div className="home-redundant_section">
      <div className='home-redundant_wrap'>
        <div className='home-redundant'>
          <div className='home-redundant_content mobile-text-center block'>
            <SectionIcon isWhite={true} className='home-redundant_content_icon'>
              <img src={iconImg} alt=""/>
            </SectionIcon>

            <div className='home-redundant_line line'></div>

            <p ref={ref} className="home-redundant_content_label">yes</p>
            <Animated animationIn="lightSpeedIn" animationOut="fadeOut" animationInDelay={0} isVisible={isInView}>
              <p className="home-redundant_content_text title">
                No redundant work and the opportunity to assign employees to
                <span className='opacity'> new creative tasks or optimize the workforce as needed.</span>
              </p>
            </Animated>
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  HomeRedundant
}