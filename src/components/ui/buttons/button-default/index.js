import React from "react";
import './style.scss'

const ButtonDefault = ({text}) => {

  return (
    <button className='button-default'>
      {text}
    </button>
  )
}

export {
  ButtonDefault
}