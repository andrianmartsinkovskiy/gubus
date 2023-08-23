import React from 'react'
import {FormInput} from "../../../forms/form-input";
import {FormWrap} from "../../../forms/form-wrap";
import './style.scss'
import {FormCheckbox} from "../../../forms/form-checkbox";
import {FormSelect} from "../../../forms/form-select";



const ExploreFormContainer = ({setForm, form, activeStep}) => {

  console.log(activeStep, 'activeStep')

  return (
    <div className="explore-form-container">
      {
        activeStep.elements.map(el => (
          <React.Fragment key={el.name}>
            {el.type === "input" && (
              <FormWrap title={el.title}>
                <FormInput
                  element={el}
                  setForm={setForm}
                  form={form}
                />
              </FormWrap>
            )}
            {
              el.type === 'checkbox' && (
                <FormWrap title={el.title}>
                  <FormCheckbox
                    element={el}
                    setForm={setForm}
                    form={form}
                  />
                </FormWrap>
              )
            }
            {
              el.type === 'select' && (
                <FormWrap title={el.title}>
                  <FormSelect
                    element={el}
                    setForm={setForm}
                    form={form}
                  />
                </FormWrap>
              )
            }
          </React.Fragment>
        ))
      }


    </div>
  )
}

export {
  ExploreFormContainer
}