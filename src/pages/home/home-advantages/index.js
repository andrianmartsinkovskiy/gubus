import React, {useRef} from "react";
import './style.scss'
import imgIcon from '../../../assets/images/message-programming.svg'
import nestIcon from '../../../assets/images/nest.svg'
import bdIcon from '../../../assets/images/postgres.svg'
import googleIcon from '../../../assets/images/google-sheets.svg'
import telegramIcon from '../../../assets/images/telegram.svg'
import {SectionIcon} from "../../../components/ui/section-icon";
import useOnScreen from "../../../hooks/on-screen.hook";
import {Animated} from "react-animated-css";

const LIST_DATA = [
  {
    icon: nestIcon,
    title: "NestJs",
    text: `
      A platform for creating efficient, scalable server-side Node.js programs. 
      It uses JavaScript, is built and fully supports TypeScript, and combines elements of OOP, FP, and RDF
    `
  },
  {
    icon: bdIcon,
    title: "Postgresql",
    text: `
      a free object-relational database management system. It exists in implementations 
      for many UNIX-like platforms, including AIX, various BSD systems, HP-UX, 
      IRIX, Linux, macOS, Solaris/OpenSolaris, Tru64, QNX, and Microsoft Windows.
    `
  },
  {
    icon: googleIcon,
    title: "Google Spreadsheets",
    text: `
      A spreadsheet application that is part of Google Docs Editors, a free web-based editing suite offered by Google.
    `,
    isWhite: true
  },
  {
    icon: telegramIcon,
    title: "Telegram",
    text: `
      A cross-platform instant messaging system with text, voice, and video messaging capabilities, as well as stickers, photos, and file formats.
    `
  }
]

const HomeAdvantages = () => {
  const ref = useRef()
  const isInView = useOnScreen(ref)

  return (
    <div className="home-advantages_section">
      <div  ref={ref}  className="home-advantages_wrap">
        <div className="home-advantages_container block">
          <SectionIcon isWhite={true}>
            <img src={imgIcon} alt=""/>
          </SectionIcon>
          <div className="home-advantages_line line">
            <img src={imgIcon} alt=""/>
          </div>
          <Animated animationIn="zoomInRight" animationOut="fadeInRight" animationInDelay={0} isVisible={isInView}>
            <h2 className="home-advantages_title title">advantages</h2>
          </Animated>
          <Animated animationIn="zoomInRight" animationOut="fadeInRight" animationInDelay={300} isVisible={isInView}>
            <p className="home-advantages_subtitle">
              Extremely functional, highly secured by Google protocols, on what GUBUS has built User Front and Admin panel.
              For your unbelievable functionality, the most complex challenges and smooth everyday working
            </p>
          </Animated>

          <div className="home-advantages_list">
            {
              LIST_DATA.map((item, i) => (
                <Animated key={Math.random()} className="home-advantages_item-wrap" animationIn="fadeInUp" animationOut="fadeOut" animationInDelay={i * 400 + 500} isVisible={isInView}>
                  <div className={`home-advantages_item ${item.isWhite && "home-advantages_item-white"}`}>
                    <div className="home-advantages_item_top">
                      <div>
                        <div className='home-advantages_item_icon'>
                          <img src={item.icon} alt=""/>
                        </div>
                      </div>
                      <div>
                        <h2>{item.title}</h2>
                      </div>
                    </div>

                    <p className="home-advantages_item_text">
                      {item.text}
                    </p>
                  </div>
                </Animated>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  HomeAdvantages
}