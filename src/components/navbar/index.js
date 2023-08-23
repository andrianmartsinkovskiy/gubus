import React, {useEffect, useState} from "react";
import {Logo} from "../ui/logo";
import './style.scss'
import {ButtonDefault} from "../ui/buttons/button-default";
import {Animated} from "react-animated-css";

const NAVIGATION_LIST = [
  {title: "Explore the problem", link: ""},
  {title: "How GUBUS works?", link: ""},
  {title: "Features", link: ""},
  {title: "Advantages", link: ""},
  {title: "Pricing", link: ""},
]

const Navbar = () => {
  const [isInTop, setIsInTop] = useState(true)
  const navbarWrapClass = isInTop ? 'navbar-wrap' : "navbar-wrap navbar-wrap-active"

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1) {
        setIsInTop(false)
      } else setIsInTop(true)
    })
  }, [])


  return (
    <div className={navbarWrapClass}>
      <div className='navbar'>
        <Animated animationIn="slideInLeft" animationOut="fadeOut" animationInDelay={0} isVisible={true}>
            <div className="navbar_logo">
              <Logo />
            </div>
        </Animated>
        <Animated animationIn="slideInDown" animationOut="fadeOut" animationInDelay={0} isVisible={true}>
          <ul className="navbar_list">
            {
              NAVIGATION_LIST.map(item => (
                <h3 key={item.title} className="navbar_list_item">{item.title}</h3>
              ))
            }
          </ul>
        </Animated>
        <Animated animationIn="slideInRight" animationOut="fadeOut" animationInDelay={0} isVisible={true}>
          <div className="navbar_submit">
            <ButtonDefault text="log in" />
          </div>
        </Animated>
      </div>
    </div>
  )
}

export {
  Navbar
}