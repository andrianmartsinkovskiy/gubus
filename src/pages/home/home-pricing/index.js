import React, {useState} from "react";
import './style.scss'
import coinIcon from '../../../assets/images/coin.svg'
import howImg from "../../../assets/images/how-image.svg";
import line from "../../../assets/images/pricing-line.svg";
import {SectionIcon} from "../../../components/ui/section-icon";

const SUBSCRIBE_TYPES = [
  {
    title: "Billed Yearly",
    time: "mouth",
    items: [
      {
        name: "Basic",
        price: "5",
        list: ["Up to 5 users", "Up to 10 users for organizations", "24/7 Support"]
      },
      {
        name: "Premium",
        price: "30",
        list: ["Up to 5 users", "Up to 10 users for organizations", "24/7 Support"],
        isReverse: true
      },
      {
        name: "Enterprise",
        price: "100",
        list: ["Up to 5 users", "Up to 10 users for organizations", "24/7 Support"]
      },
    ]
  },
  {
    title: "Billed Monthly",
    time: "year",
    items: [
      {
        name: "Basic",
        price: "5",
        list: ["Up to 5 users", "Up to 10 users for organizations", "24/7 Support"]
      },
      {
        name: "Premium",
        price: "30",
        list: ["Up to 5 users", "Up to 10 users for organizations", "24/7 Support"],
        isReverse: true
      },
      {
        name: "Enterprise",
        price: "100",
        list: ["Up to 5 users", "Up to 10 users for organizations", "24/7 Support"]
      },
    ]
  }
]

const HomePricing = () => {
  const [activeType, setActiveType] = useState(SUBSCRIBE_TYPES[0])

  return (
    <div className="home-pricing_wrap block">
      <div className='home-how_dec'>
        <div className="home-how_dec_left">
          <div></div>
        </div>
        <div className="home-how_dec_right">
          <div></div>
        </div>
        <img src={howImg} alt=""/>
      </div>
      <div className="home-pricing_line line">
        <img src={line} alt=""/>
      </div>
      <SectionIcon>
        <img src={coinIcon} alt=""/>
      </SectionIcon>
      <h2 className="home-pricing_title title mobile-text-center">PRICING</h2>
      <p className="home-pricing_subtitle mobile-text-center">The incredibly low GUBUS monthly rate</p>
      <div className="home-pricing_section">
        <div className="home-pricing_bar">
          {
            SUBSCRIBE_TYPES.map(item => (
              <div
                className={`home-pricing_bar_item ${activeType.title === item.title && "home-pricing_bar_item-active"}`}
                key={item.title}
                onClick={() => setActiveType(item)}
              >
                {item.title}
              </div>
            ))
          }
        </div>

        <div className="home-pricing_list">
          {
            activeType.items.map(item => (
              <div
                key={item.name}
                className={`home-pricing_item ${item.isReverse && 'home-pricing_item-reverse'}`}
              >
                <div className="home-pricing_item_bar">
                  <h3>{item.name}</h3>
                  <div>
                    <p className="home-pricing_item_price">${item.price}</p>
                    <p className="home-pricing_item_price-label">/per {activeType.time}</p>
                  </div>
                </div>

                <div className="home-pricing_item_list">
                  {
                    item.list.map(listItem => (
                      <div key={Math.random()} className="home-pricing_benefit">
                        <div className="home-pricing_benefit_icon">✓</div>
                        <div className="home-pricing_benefit_text">{listItem}</div>
                      </div>
                    ))
                  }
                </div>

                <button className="home-pricing_item_btn">
                  Start My 15-day Trial
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12.025 4.94141L17.0834 9.99974L12.025 15.0581" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.91663 10H16.9416"  strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export {
  HomePricing
}