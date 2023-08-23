import React from "react";
import './style.scss'

const ButtonWithArrow = ({text, isWhite}) => {

  return (
    <button className={`button-with-arrow ${isWhite && 'button-with-arrow-white'}`}>
      {text}
      <span className="button-with-arrow_icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12.025 4.94141L17.0834 9.99974L12.025 15.0581" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.91663 10H16.9416"  strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      </span>
    </button>
  )
}

export {
  ButtonWithArrow
}