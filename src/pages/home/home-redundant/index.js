import React from 'react'
import'./index.scss'
import iconImg from "../../../assets/images/tick-circle.svg";
import {SectionIcon} from "../../../components/ui/section-icon";

const HomeRedundant = () => {

  return (
    <div className="home-redundant_section">
      <div className='home-redundant_wrap'>
        <div className='home-redundant'>
          <div className='home-redundant_content mobile-text-center block'>
            <SectionIcon isWhite={true} className='home-redundant_content_icon'>
              <img src={iconImg} alt=""/>
            </SectionIcon>

            <div className='home-redundant_line line'></div>

            <p className="home-redundant_content_label">yes</p>
            <p className="home-redundant_content_text title">
              No redundant work and the opportunity to assign employees to
              <span className='opacity'> new creative tasks or optimize the workforce as needed.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  HomeRedundant
}