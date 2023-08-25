import React, {useRef} from 'react'
import './index.scss'
import messageImg from "../../../assets/images/messages.svg";
import {SectionIcon} from "../../../components/ui/section-icon";
import useOnScreen from "../../../hooks/on-screen.hook";
import {AnimLeft} from "../../../components/anim-left";

const HomeClients = () => {
  const ref = useRef()
  const isInView = useOnScreen(ref)

  return (
    <div className="home-clients_section">
      <div className='home-clients_wrap'>
        <div className='home-clients'>
          <div className='home-clients_content mobile-text-center block'>
            <SectionIcon isInView={isInView} isWhite={true}>
              <img src={messageImg} alt=""/>
            </SectionIcon>

            <div className='home-clients_line line' style={{maxHeight: isInView ? '2000px' : 0}}></div>

            <AnimLeft isInView={isInView} left={30}>
              <p ref={ref} className="home-clients_content_label">MANY OF OUR CLIENTS SAYING</p>
            </AnimLeft>

            <AnimLeft isInView={isInView} left={30} delay={300}>
              <p className="home-clients_content_text title">
                “WE NEED SMTH ABSOLUTELY DIFFERENT THAN POPULAR CRM SYSTEMS PROPOSE TO US...
                <span className='opacity'> BECAUSE EACH BUSINESS IS UNIQUE.WE NEED SPECIFICALLY OURS SYSTEM.”</span>
              </p>
            </AnimLeft>
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  HomeClients
}