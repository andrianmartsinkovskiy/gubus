import React from "react";
import './style.scss'
import {Logo} from "../ui/logo";
import facebookIcon from '../../assets/images/favebook.svg'
import instagramIcon from '../../assets/images/instagram.svg'
import twitterIcon from '../../assets/images/twitter.svg'
import youtubeIcon from '../../assets/images/youtube.svg'
import topIcon from '../../assets/images/arrow-top.svg'



const Footer = () => {

  return (
    <div className="footer_section">
      <div className="footer_wrap">
        <div className="footer_container block">
          <div className="footer_list">
            <div>
              <Logo />
            </div>
            <div>
              <h4 className="footer_list_title">Learn More</h4>
              <p className="footer_list_item">Explore the problem</p>
              <p className="footer_list_item">How GUBUS works?</p>
              <p className="footer_list_item">Features</p>
              <p className="footer_list_item">Advantages</p>
              <p className="footer_list_item">Pricing</p>
            </div>
            <div>
              <h4 className="footer_list_title">Contact Us</h4>
              <p className="footer_list_item">
                Phone:<span> 800-880-3880</span>
              </p>
              <p className="footer_list_item">
                E-mail:<span> gubus@gmail.com</span>
              </p>
            </div>
            <div className="footer_list_social">
              <div className="footer_social">
                <img src={facebookIcon} alt=""/>
                <img src={instagramIcon} alt=""/>
                <img src={twitterIcon} alt=""/>
                <img src={youtubeIcon} alt=""/>
              </div>
            </div>
            <div className="footer_to-top-wrap">
              <div className="footer_to-top">
                On top
                <img src={topIcon} alt=""/>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            © 2023 GUBUS | All Rights Reserved
          </div>
        </div>
      </div>

    </div>
  )
}

export {
  Footer
}