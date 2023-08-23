import React, {useRef} from 'react'
import './index.scss'
import messageImg from "../../../assets/images/messages.svg";
import {SectionIcon} from "../../../components/ui/section-icon";
import useOnScreen from "../../../hooks/on-screen.hook";
import {Animated} from "react-animated-css";

const HomeClients = () => {
  const ref = useRef()
  const isInView = useOnScreen(ref)

  return (
    <div className="home-clients_section">
      <div className='home-clients_wrap'>
        <div className='home-clients'>
          <div className='home-clients_content mobile-text-center block'>
            <SectionIcon isWhite={true}>
              <img src={messageImg} alt=""/>
            </SectionIcon>

            <div className='home-clients_line line'></div>

            <p ref={ref} className="home-clients_content_label">MANY OF OUR CLIENTS SAYING</p>
            <Animated
              animationIn="zoomIn"
              animationOut="fadeOut"
              animationInDelay={0}
              animationOutDuration={1000}
              isVisible={isInView}
            >
              <p className="home-clients_content_text title">
                “WE NEED SMTH ABSOLUTELY DIFFERENT THAN POPULAR CRM SYSTEMS PROPOSE TO US...
                <span className='opacity'> BECAUSE EACH BUSINESS IS UNIQUE.WE NEED SPECIFICALLY OURS SYSTEM.”</span>
              </p>
            </Animated>
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  HomeClients
}