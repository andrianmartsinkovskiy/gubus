import React from 'react'
import './style.scss'

const  FormInput = ({setForm, element, form}) => {

  const onChange = (val) => {
    const index = form.findIndex(item => item.isActive)

    const newForm = [...form]
    newForm[index].elements = newForm[index].elements.map(item => {
      if (item.name === element.name) {
        item.value = val
        return  item
      }
      else return item
    })
    setForm(newForm)
  }

  return (
    <input
      className="form-input" type="text"
      value={element.value}
      onChange={e => onChange(e.target.value)}
      placeholder={element.placeholder}
    />
  )
}

export {
  FormInput
}