import React, {useRef} from 'react'
import './style.scss'
import briefcaseImg from "../../../assets/images/briefcase.svg"
import {ExploreForm} from "../../../components/explore-form";
import {SectionIcon} from "../../../components/ui/section-icon";
import useOnScreen from "../../../hooks/on-screen.hook";
import {Animated} from "react-animated-css";

const HomeExplore = () => {
  const ref = useRef()
  const isInView = useOnScreen(ref)

  console.log(isInView, 'isInView')


  return (
    <div ref={ref}  className="home-explore block">
      <div className='home-explore_line line'>

      </div>
      <SectionIcon>
        <img src={briefcaseImg} alt=""/>
      </SectionIcon>

      <Animated animationIn="lightSpeedIn" animationOut="fadeOut" animationInDelay={0} isVisible={isInView}>
        <h2 className="home-explore_title title">let's <span className='blue'>explore</span> the problem</h2>
      </Animated>
      <Animated animationIn="lightSpeedIn" animationOut="fadeOut" animationInDelay={200} isVisible={isInView}>
        <p className='home-explore_subtitle'>
          Answer our questions to delve into and provide you with a ready-made solution
        </p>
      </Animated>

      <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={300} isVisible={isInView}>
        <ExploreForm />
      </Animated>

    </div>
  )
}

export {
  HomeExplore
}