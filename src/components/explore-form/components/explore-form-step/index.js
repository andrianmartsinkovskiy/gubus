import React from 'react'
import './style.scss'
import {ButtonTransparent} from "../../../ui/buttons/button-transparent";

const ExploreFormStep = ({children, next, form, setForm, activeStep}) => {

  const onTextAreaChange = (val) => {
    const index = form.findIndex(item => item.isActive)

    const newForm = [...form]
    newForm[index].note = val
    setForm(newForm)
  }

  return (
    <div className="explore-form-step">
      <div className="explore-form-step_left">
        {children}
      </div>
      <div className="explore-form-step_right">
        <textarea
          placeholder="// Feedback on choice"
          name="area" id="area"
          className='explore-form-step_area'
          value={activeStep.note}
          onChange={e => onTextAreaChange(e.target.value)}
        >

        </textarea>
        <div className="explore-form-step_submit">
          <ButtonTransparent text="next" submit={next} />
        </div>
      </div>
    </div>
  )
}

export {
  ExploreFormStep
}