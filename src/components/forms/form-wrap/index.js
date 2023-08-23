import React from 'react'
import './style.scss'

const  FormWrap = ({title, children}) => {

  return (
    <div className="form-wrap">
      {!!title && <h5 className="form-wrap_title">{title}</h5>}
      <div>
        {children}
      </div>
    </div>
  )
}

export {
  FormWrap
}