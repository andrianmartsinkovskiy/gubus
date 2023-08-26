import React from 'react'
import {HomeEventFirst} from "../home-event-first";
import {HomeEventSecond} from "../home-event-second";
import poster1 from '../../../assets/images/poster-event-left.png'
import poster2 from '../../../assets/images/event-poster.svg'
import {ReactComponent as Icon1} from '../../../assets/images/screen-icon.svg'
import {ReactComponent as Icon2} from '../../../assets/images/keyboard-open.svg'
import {ReactComponent as Icon3} from '../../../assets/images/data.svg'
import {ReactComponent as Icon4} from '../../../assets/images/crop.svg'
import {ReactComponent as Icon5} from '../../../assets/images/diagram.svg'
import {ReactComponent as Icon6} from '../../../assets/images/receipt-2.svg'
import {ReactComponent as Icon7} from '../../../assets/images/cloud-add.svg'
import {ReactComponent as Icon8} from '../../../assets/images/slider-vertical.svg'
import {ReactComponent as Icon9} from '../../../assets/images/flash.svg'
import {ReactComponent as Icon10} from '../../../assets/images/location.svg'
import {ReactComponent as Icon11} from '../../../assets/images/refresh-2.svg'
import {ReactComponent as Icon12} from '../../../assets/images/messages-2.svg'
import {ReactComponent as Icon13} from '../../../assets/images/candle.svg'
import {ReactComponent as Icon14} from '../../../assets/images/grid-8.svg'
import {ReactComponent as Icon15} from '../../../assets/images/maximize.svg'
import {ReactComponent as Icon16} from '../../../assets/images/3dcube.svg'
import {ReactComponent as Icon17} from '../../../assets/images/flag-2.svg'
import {ReactComponent as Icon18} from '../../../assets/images/receipt.svg'



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
        icon: <Icon1 />,
        text: "Adaptive event driven built-in stages resolution logic in a box"
      },
      {
        id: 2,
        poster: poster2,
        icon: <Icon2 />,
        text: "Build custom stages with laconic admin configuration"
      },
      {
        id: 3,
        poster: poster2,
        icon: <Icon3 />,
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
        icon: <Icon4 />,
        text: "Control your product transformation on each stage"
      },
      {
        id: 2,
        poster: poster1,
        icon: <Icon5 />,
        text: "Automated stage moving forward with single workers click"
      },
      {
        id: 3,
        poster: poster1,
        icon: <Icon6 />,
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
        icon: <Icon7 />,
        text: "Extremely smooth navigation with arrows on a data"
      },
      {
        id: 2,
        poster: poster2,
        icon: <Icon8 />,
        text: "Intuitive navigation, all data in one place. 3 clicks to find what you need. Immortal Ctrl+F."
      },
      {
        id: 3,
        poster: poster2,
        icon: <Icon9 />,
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
        icon: <Icon10 />,
        text: "GUBUS maps anything on the screen instantly."
      },
      {
        id: 2,
        poster: poster1,
        icon: <Icon11 />,
        text: "Simplify accounting with semi-automated input for complex products."
      },
      {
        id: 3,
        poster: poster1,
        icon: <Icon12 />,
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
        icon: <Icon13 />,
        text: "Manage salaries and other  transactions in a few (really!) clicks!"
      },
      {
        id: 2,
        poster: poster2,
        icon: <Icon14 />,
        text: "Improve advanced business logic with GoogleSheets Formulas"
      },
      {
        id: 3,
        poster: poster2,
        icon: <Icon15 />,
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
        icon: <Icon16 />,
        text: "The main place of a whole system. Don’t look at its simplicity."
      },
      {
        id: 2,
        poster: poster1,
        icon: <Icon17 />,
        text: "Easily manage orders from it, start, pause and correct them"
      },
      {
        id: 3,
        poster: poster1,
        icon: <Icon18 />,
        text: "Easily manage cash flow with it with built-in GUBUS transactions module"
      }
    ]
  },
]

const HomeEventList = () => {

  return (
    <div>
      <Icon1 />
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