import React from "react";
import './style.scss'


const SectionIcon = ({children, isWhite}) => {

  return (
    <div className={`section-icon ${isWhite ? 'section-icon_white' : ''}`}>
      {children}
    </div>
  )
}

export {
  SectionIcon
}