import React from 'react'
import {FormInput} from "../../../forms/form-input";
import {FormWrap} from "../../../forms/form-wrap";

const ExploreFormFirst = ({formOnChange, form}) => {

  return (
    <div>
      <FormWrap title="How many workers in your business?">
        <FormInput
          placeholder="Type the number"
          form={form} name="workers"
          submit={(val) => console.log(val)}
        />
      </FormWrap>
    </div>
  )
}

export {
  ExploreFormFirst
}