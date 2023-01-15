import React from "react"
import FormInput from "../FormInput"

const InputStory = (args) => (<FormInput {...args} />)

export const Input = InputStory.bind({})
Input.args = {
  id: 'storybookInput1',
  className: 'storybookInput1-classname',
  type: 'text',
  label: 'Last name',
  onchange: (e) => console.log(e.target.value),
  placeholder: 'placeholder'
}

export const NoLabel = InputStory.bind({})
NoLabel.args = {
  id: 'storybookInput1',
  className: 'storybookInput1-classname',
  type: 'text',
  onchange: (e) => console.log(e.target.value),
  placeholder: 'placeholder'
}

export default {
  title: 'Components/Form/Input',
  component: FormInput
}
