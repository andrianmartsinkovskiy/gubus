import React, {useState} from 'react'
import './style.scss'
import {ExploreFormContainer} from "./components/explore-form-container";
import {ExploreFormStep} from "./components/explore-form-step";

const steps = [
  {
    note: "",
    key: '01',
    isActive: true,
    elements: [
      {
        type: "input",
        value: "",
        name: "workers",
        title: "How many workers in your business?",
        placeholder: "Type the number"
      },
      {
        type: "checkbox",
        name: "lot_of_work",
        title: "",
        options: [
          {
            value: "lot_of",
            label: "A lot of work should be done - but is not",
            isActive: true
          },

          {
            value: "lot_of_2",
            label: "A lot of work I do manually and spend much personal time for it or even hire people",
            isActive: false
          }
        ]
      }
    ]
  },
  {
    note: "",
    key: '02',
    isActive: false,
    elements: [
      {
        type: "checkbox",
        name: "lot_of_work_2",
        title: "What type og business do you have?",
        options: [
          {value: "Trade company", label: "Trade company", isActive: true},
          {value: "Production company", label: "Production company", isActive: false},
          {value: "Production + Sales Company", label: "Production + Sales Company", isActive: false},
          {value: "Service Company", label: "Service Company", isActive: false},
          {value: "IT Company", label: "IT Company", isActive: false},
        ]
      }
    ]
  },
  {
    note: "",
    key: '03',
    isActive: false,
    elements: [
      {
        type: "select",
        name: "select_1",
        title: "How many digital products do you use to manage your business?",
        options: [
          {value: 'value 1', label: "value 1", isActive: true},
          {value: 'value 2', label: "value 2", isActive: false}
        ]
      },
      {
        type: "input",
        value: "",
        name: "spend",
        title: "How much did you spend on it?",
        placeholder: "Type the number"
      },
    ]
  },
  {
    note: "",
    key: '04',
    isActive: false,
    elements: [
      {
        type: "select",
        name: "select_1",
        title: "How many digital products do you use to manage your business?",
        options: [
          {value: 'value 1', label: "value 1", isActive: true},
          {value: 'value 2', label: "value 2", isActive: false}
        ]
      },
    ]
  },
]


const ExploreForm = () => {
  const [form, setForm] = useState([...steps])

  const activeStep = form.find(item => item.isActive)

  const changeActiveStep = (key) => {
    setForm(prev => {
      return prev.map(item => {
        return {
          ...item,
          isActive: item.key === key
        }
      })
    })
  }

  const nextStep = () => {
    const index = form.findIndex(item => item.isActive)


    if (form[index + 1]) {
      setForm(prev => {
        return prev.map(item => {
          return {
            ...item,
            isActive: item.key === form[index + 1].key
          }
        })
      })
    } else return
  }

  return (
    <div className='explore-form'>
      <div className="explore-form_navigation">
        {
          form.map(item => (
            <div
              key={item.key}
              className={
                activeStep.key === item.key
                  ? 'explore-form_navigation_step explore-form_navigation_step-active'
                  : 'explore-form_navigation_step'
              }
              onClick={() => changeActiveStep(item.key)}
            >
              {item.key}
            </div>
          ))
        }
      </div>
      <ExploreFormStep next={nextStep} form={form} setForm={setForm} activeStep={activeStep}>
        <ExploreFormContainer activeStep={activeStep} form={form} setForm={setForm} />
      </ExploreFormStep>
    </div>
  )
}

export {
  ExploreForm
}