import React from "react"
import NewForm from "../NewForm"
import FormInput from "../FormInput"
import { Button } from "../../index"

const FormStory = (args) => {
  return (
    <NewForm id={args.id} className={args.className} onsubmit={args.onsubmit}>
      {args.children}
    </NewForm>
  )
}

function handleSubmit(e) {
	e.preventDefault()

	alert('Form submitted')
}

export const Form = FormStory.bind({})
Form.args = {
	id: 'loginForm',
	className: 'loginForm-classname',
	onsubmit: (e) => handleSubmit(e),
  children: (
    <>
      <FormInput id={"loginForm-FName"} label="First name" />
      <FormInput id={"loginForm-LName"} label="Last name" />
      <Button>Submit</Button>
    </>
  ),
}

export default {
  title: "Components/Form",
  component: NewForm
}
