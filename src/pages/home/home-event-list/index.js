import React from 'react'
import {HomeEventFirst} from "../home-event-first";
import {HomeEventSecond} from "../home-event-second";
import poster1 from '../../../assets/images/poster-event-left.png'
import poster2 from '../../../assets/images/event-poster.svg'
import icon1 from '../../../assets/images/screen-icon.svg'
import icon2 from '../../../assets/images/keyboard-open.svg'
import icon3 from '../../../assets/images/data.svg'
import icon4 from '../../../assets/images/crop.svg'
import icon5 from '../../../assets/images/diagram.svg'
import icon6 from '../../../assets/images/receipt-2.svg'
import icon7 from '../../../assets/images/cloud-add.svg'
import icon8 from '../../../assets/images/slider-vertical.svg'
import icon9 from '../../../assets/images/flash.svg'
import icon10 from '../../../assets/images/location.svg'
import icon11 from '../../../assets/images/refresh-2.svg'
import icon12 from '../../../assets/images/messages-2.svg'
import icon13 from '../../../assets/images/candle.svg'
import icon14 from '../../../assets/images/grid-8.svg'
import icon15 from '../../../assets/images/maximize.svg'
import icon16 from '../../../assets/images/3dcube.svg'
import icon17 from '../../../assets/images/flag-2.svg'
import icon18 from '../../../assets/images/receipt.svg'

const EVENTS_DATA = [
  {
    titleWhite: "STRAIGHTENED EVEN THE",
    titleBlue: "CRAZIEST STAGE",
    subtitle: "Easily build custom workflows for each of your products.",
    note: "// Time estimate to totally GUBUS them: 10 hours",
    type: "black",
    items: [
      {
        id: 1,
        poster: poster2,
        icon: icon1,
        text: "Adaptive event driven built-in stages resolution logic in a box"
      },
      {
        id: 2,
        poster: poster2,
        icon: icon2,
        text: "Build custom stages with laconic admin configuration"
      },
      {
        id: 3,
        poster: poster2,
        icon: icon3,
        text: "Easily modify products workflows with statuses"
      }
    ]
  },
  {
    titleWhite: "EACH STEP",
    titleBlue: "TILL LAST DETAIL",
    subtitle: "Easily control and manage each stage workflow with branches gubus module",
    note: "// With GUBUS it is always on top of few sheets - automated nature of GUBUS never won’t let you feel lack of control",
    type: "white",
    items: [
      {
        id: 1,
        poster: poster1,
        icon: icon4,
        text: "Control your product transformation on each stage"
      },
      {
        id: 2,
        poster: poster1,
        icon: icon5,
        text: "Automated stage moving forward with single workers click"
      },
      {
        id: 3,
        poster: poster1,
        icon: icon6,
        text: "Gather payment/production/new_entered_info on each step with built-in filterUp functionality"
      }
    ]
  },
  {
    titleWhite: "HIGH DENSITY auto",
    titleBlue: "WORKFEEDS",
    subtitle: "Have all info needed served on only a few sheets.",
    note: "// With GUBUS it is always on top of few sheets - automated nature of GUBUS never won’t let you feel lack of control",
    type: "black",
    items: [
      {
        id: 1,
        poster: poster2,
        icon: icon7,
        text: "Extremely smooth navigation with arrows on a data"
      },
      {
        id: 2,
        poster: poster2,
        icon: icon8,
        text: "Intuitive navigation, all data in one place. 3 clicks to find what you need. Immortal Ctrl+F."
      },
      {
        id: 3,
        poster: poster2,
        icon: icon9,
        text: "Limited modifications, more freedom, flexibility, and power."
      }
    ]
  },
  {
    titleWhite: "MOSAIC ",
    titleBlue: "INPUTS",
    subtitle: "Easily enter or modify essential data in one place with no other data allowed",
    note: "// Ask yourself is not that the way to bloody mess your rules? And the reason for the lack of desire to use such a complex product?",
    type: "white",
    items: [
      {
        id: 1,
        poster: poster1,
        icon: icon10,
        text: "GUBUS maps anything on the screen instantly."
      },
      {
        id: 2,
        poster: poster1,
        icon: icon11,
        text: "Simplify accounting with semi-automated input for complex products."
      },
      {
        id: 3,
        poster: poster1,
        icon: icon12,
        text: "Real-time support: instant prices, discounts, order changes."
      }
    ]
  },
  {
    titleWhite: "HMULTIPANEL ENTER FOR",
    titleBlue: "HUMONGOUS DATA",
    subtitle: "Easily enter bunches of data in a half-automated manner  with this pattern",
    note: "// With GUBUS it is always on top of few sheets - automated nature of GUBUS never won’t let you feel lack of control",
    type: "black",
    items: [
      {
        id: 1,
        poster: poster2,
        icon: icon13,
        text: "Manage salaries and other  transactions in a few (really!) clicks!"
      },
      {
        id: 2,
        poster: poster2,
        icon: icon14,
        text: "Improve advanced business logic with GoogleSheets Formulas"
      },
      {
        id: 3,
        poster: poster2,
        icon: icon15,
        text: "Enter and transform even most complex supplies with only filling one column"
      }
    ]
  },
  {
    titleWhite: "Magic",
    titleBlue: "command panel",
    subtitle: "GUBUS panel is your powerful, unstoppable glory point for any task!",
    note: "// With GUBUS you’l need only 5 on start. Everything else is totally automated!",
    type: "white",
    items: [
      {
        id: 1,
        poster: poster1,
        icon: icon16,
        text: "The main place of a whole system. Don’t look at its simplicity."
      },
      {
        id: 2,
        poster: poster1,
        icon: icon17,
        text: "Easily manage orders from it, start, pause and correct them"
      },
      {
        id: 3,
        poster: poster1,
        icon: icon18,
        text: "Easily manage cash flow with it with built-in GUBUS transactions module"
      }
    ]
  },
]

const HomeEventList = () => {

  return (
    <div>
      {
        EVENTS_DATA.map((item, index) => (
          <React.Fragment key={index}>
            {
              item.type === 'black' ? (
                <HomeEventFirst item={item} index={index} />

              ) : (
                <HomeEventSecond item={item} index={index} isLast={index === EVENTS_DATA.length - 1}/>
              )
            }
          </React.Fragment>
        ))
      }
    </div>
  )
}

export {
  HomeEventList
}