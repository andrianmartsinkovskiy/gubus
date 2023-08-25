import React from 'react'
import './style.scss'


const AnimScale = ({children, isInView, delay}) => {

  return (
    <div
      className={isInView ? 'scaleFull' : 'scaleNull'}
      style={{
        transition: '1s',
        transitionDelay: (!delay ? 0 :  delay / 1000) + 's'
      }}
    >
      {children}
    </div>
  )
}

export {
  AnimScale
}