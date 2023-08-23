import React from 'react'
import './style.scss'
import briefcaseImg from "../../../assets/images/briefcase.svg"
import {ExploreForm} from "../../../components/explore-form";
import {SectionIcon} from "../../../components/ui/section-icon";

const HomeExplore = () => {

  return (
    <div className="home-explore block">
      <div className='home-explore_line line'>

      </div>
      <SectionIcon>
        <img src={briefcaseImg} alt=""/>
      </SectionIcon>
      <h2 className="home-explore_title title">let's <span className='blue'>explore</span> the problem</h2>
      <p className='home-explore_subtitle'>
        Answer our questions to delve into and provide you with a ready-made solution
      </p>

      <ExploreForm />
    </div>
  )
}

export {
  HomeExplore
}