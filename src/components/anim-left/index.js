import React from 'react'
import './style.scss'


const AnimLeft = ({children, isInView, delay, left}) => {

  return (
    <div
      style={{
        opacity: isInView ? 1 : 0,
        transform: `translateX(${isInView ? 0 : left ? left : 0}px)`,
        transition: '1s',
        transitionDelay: (!delay ? 0 :  delay / 1000) + 's'
      }}
    >
      {children}
    </div>
  )
}

export {
  AnimLeft
}