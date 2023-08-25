import React, {useRef} from 'react'
import './style.scss'
import briefcaseImg from "../../../assets/images/briefcase.svg"
import {ExploreForm} from "../../../components/explore-form";
import {SectionIcon} from "../../../components/ui/section-icon";
import useOnScreen from "../../../hooks/on-screen.hook";
import {AnimLeft} from "../../../components/anim-left";

const HomeExplore = () => {
  const ref = useRef()
  const isInView = useOnScreen(ref)


  return (
    <div className="home-explore block">
      <div className='home-explore_line line' style={{maxHeight: isInView ? '2000px' : 0}}>

      </div>
      <SectionIcon isInView={isInView}>
        <img src={briefcaseImg} alt=""/>
      </SectionIcon>

      <AnimLeft isInView={isInView} left={-30}>
        <h2 className="home-explore_title title">let's <span className='blue'>explore</span> the problem</h2>
      </AnimLeft>
      <AnimLeft isInView={isInView} delay={300} left={-30}>
        <p ref={ref}  className='home-explore_subtitle'>
          Answer our questions to delve into and provide you with a ready-made solution
        </p>
      </AnimLeft>

      <ExploreForm />

    </div>
  )
}

export {
  HomeExplore
}