import React from "react";
import './style.scss'


const SectionIcon = ({children, isWhite, isInView}) => {

  return (
    <div style={{opacity: isInView ? 1 : 0}} className={`section-icon ${isWhite ? 'section-icon_white' : ''}`}>
      {children}
    </div>
  )
}

export {
  SectionIcon
}