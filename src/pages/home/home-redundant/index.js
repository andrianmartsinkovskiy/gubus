import React from 'react'
import'./index.scss'
import messageImg from "../../../assets/images/messages.svg";

const HomeRedurant = () => {

  return (
    <div className='home-clients-wrap'>
      <div className='home-clients'>
        <div className='home-clients_content'>
          <div className='home-clients_content_icon'>
            <img src={messageImg} alt=""/>
          </div>

          <div className='home-clients-line'></div>

          <p className="home-clients_content_label">MANY OF OUR CLIENTS SAYING</p>
          <p className="home-clients_content_text">
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