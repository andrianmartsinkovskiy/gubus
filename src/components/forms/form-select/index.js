import React from 'react'
import './style.scss'
import Select from "react-select";

const styles = {
  control: styles => ({ ...styles, height: '48px', boxShadow: "none" }),
};


const FormSelect = ({element, form, setForm}) => {
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

  console.log(element, 'el')

  return (
    <div className='form-select'>
      <Select
        styles={styles}
        className="basic-single"
        classNamePrefix="select"
        value={element.options.find(item => item.isActive)}
        name={element.name}
        options={element.options}
        onChange={(val) => onChange(val.value)}
        placeholder={element.placeholder}
      />
    </div>
  )
}

export {
  FormSelect
}