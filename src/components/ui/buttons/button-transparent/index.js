import React from "react";
import './style.scss'

const ButtonTransparent = ({text, submit}) => {

  return (
    <button className='button-transparent' onClick={() => submit && submit()}>
      {text}
      <span className="button-transparent_icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.025 4.94141L17.0834 9.99974L12.025 15.0581" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.91663 10H16.9416" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </button>
  )
}

export {
  ButtonTransparent
}