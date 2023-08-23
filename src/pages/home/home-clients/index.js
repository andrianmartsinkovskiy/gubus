import React from 'react'
import'./index.scss'
import messageImg from "../../../assets/images/messages.svg";
import {SectionIcon} from "../../../components/ui/section-icon";

const HomeClients = () => {

  return (
    <div className='home-clients_wrap'>
      <div className='home-clients'>
        <div className='home-clients_content block'>
          <SectionIcon isWhite={true}>
            <img src={messageImg} alt=""/>
          </SectionIcon>

          <div className='home-clients_line line'></div>

          <p className="home-clients_content_label">MANY OF OUR CLIENTS SAYING</p>
          <p className="home-clients_content_text title">
            “WE NEED SMTH ABSOLUTELY DIFFERENT THAN POPULAR CRM SYSTEMS PROPOSE TO US...
            <span className='opacity'> BECAUSE EACH BUSINESS IS UNIQUE.WE NEED SPECIFICALLY OURS SYSTEM.”</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export {
  HomeClients
}