import React from 'react'
import './style.scss'

const FormCheckbox = ({element, setForm, form}) => {

  const onChange = (val) => {
    const index = form.findIndex(item => item.isActive)
    const newForm = [...form]
    newForm[index].elements = newForm[index].elements.map(item => {

      if (item.name === element.name) {
        item.options = item.options.map(optionItem => {
          optionItem.isActive = optionItem.value === val
          return optionItem
        })
        return  item
      } else return item
    })
    setForm(newForm)
  }

  return (
    <div className="form-checkbox">
      {
        element.options.map(item => (
          <div
            className={`form-checkbox_item ${item.isActive && 'form-checkbox_item-active'}`}
            onClick={() => onChange(item.value)}
            key={item.value}
          >
            <div className="form-checkbox_value">

            </div>
            <p className="form-checkbox_label">{item.label}</p>
          </div>
        ))
      }
    </div>
  )
}

export {
  FormCheckbox
}