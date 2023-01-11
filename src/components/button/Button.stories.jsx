import React from "react"
import Button from "./Button"

const ButtonStory = (args) => (<Button onclick={args.onclick}>{args.children}</Button>)

export const Primary = ButtonStory.bind({})
Primary.args = {
  children: 'Howdy',
  onclick: () => alert('button clicked')
}

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onclick: {
      action: 'clicked'
    }
  }
}
